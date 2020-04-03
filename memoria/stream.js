const fs = require('fs');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('UTF8')

readableStream.on('data', function(chunk){
    // console.log(chunk);
    data += chunk;
});

// Para trabajar con archivos grandes
readableStream.on('end', function(){
    console.log(data);
});