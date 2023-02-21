//file system
const fs = require('fs');

//read file system
// fs.readFile('./blog.txt', (err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//     }
// })

// write file system

// fs.writeFile('./blog.txt',"nodes world",()=>{
//     console.log("Done!");
// })

// create and delete a directory

// if(fs.existsSync('./assets')){
//     console.log("deleting...");
//     fs.rmdir('./assets/svg',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("Removed!");
//     });
    
// }else{
//     fs.mkdirSync('./assets/pngtxt',(err)=>{
//         console.log("Creating...");
//         if(err){
//             console.log(err);
//         }
//         console.log("Created!");
//     });
    
// }

// delete files

// if(fs.existsSync('./blog.txt')){
//     fs.unlinkSync('./blog.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("file Removed!");
//     });
// }