const { Transform } = require("stream");
const cipher = require("./caesar-cipher");

module.exports = (action, shift) => {
    return new Transform({
        transform(chunk, encoding, callback) {
            this.push(cipher(chunk.toString(), action, shift));
            callback();
        }
    });
}