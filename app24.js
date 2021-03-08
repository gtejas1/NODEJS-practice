var fs = require('fs');
const { Readable } = require('stream');

var readable = fs.createReadStream(__dirname + '/greet.txt',{encoding:'utf-8',highWaterMark:16*1024});

var writable = fs.createWriteStream(__dirname + '/greet_copy.txt');

readable.on('data', function (chunk) {
    console.log(chunk.length);
    writable.write(chunk);
});