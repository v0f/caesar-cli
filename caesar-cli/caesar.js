const argsparse = require('./argsparse');
const transformer = require('./transform');
const { pipeline } = require('stream');
const fs = require('fs');

const opts = argsparse();

if(opts.error) {
    console.error(opts.error);
    process.exit(1);
}

let inFile, outFile;
if(opts.input)
    inFile = fs.createReadStream(opts.input, {encoding: 'utf8'});
if(opts.output)
    outFile = fs.createWriteStream(opts.output, {
        flags: fs.constants.O_WRONLY|fs.constants.O_APPEND,
        encoding: 'utf8'
    });

pipeline(
    inFile || process.stdin,
    transformer( opts.action, opts.shift ),
    outFile || process.stdout,
    (err) => {
        if(err) {
            process.exitCode = 1;
            if(err.code == 'ENOENT')
                console.error(`file does not exist: ${err.path}`);
            else
                console.error(err.toString());
        }
    }
)

