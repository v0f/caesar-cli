const { program } = require('commander');

module.exports = () => {
    program.storeOptionsAsProperties(false);
    program
        .requiredOption('-a, --action <action>', 'encode or decode')
        .requiredOption('-s, --shift <shift>', 'caesar cipher shift', parseInt)
        .option('-i, --input <file>', 'input file (stdin if not specified)')
        .option('-o, --output <file>', 'input file (stdout if not specified)');

    program.parse(process.argv);

    let opts = program.opts();

    if(isNaN(opts.shift))
        opts['error'] = 'option <shift> must be a number';

    if(opts.action != 'encode' && opts.action != 'decode')
        opts['error'] = 'option <action> must be "encode" or "decode"';

    return opts;
}
