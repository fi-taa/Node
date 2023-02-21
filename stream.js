const fs = require('fs');

 const writeStream = fs.createWriteStream('./blog1.txt');
//  writeStream.write("hello world")
//  writeStream.write("\nhello fita");

 const readStream = fs.createReadStream('./blog.txt');

//  readStream.on('data', (chunk)=>{

//         console.log(chunk.toString());
//  })

readStream.pipe(writeStream);