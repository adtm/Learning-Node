/**
 * Buffer
 *
 * is a way for handling binary data
 */

let string = "Tomas";

const buf = Buffer.from(string);
console.log(buf);

// sockets communicate by binary, if default encoding
// is not UTF-8
