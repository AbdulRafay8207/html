//Sync version to read file-------------------------------------------------

// const fs = require("fs")
// try {
// const data = fs.readFileSync("text.txt", "utf8")
//     console.log(data);
// } catch(err) {
//     console.log(err);
    
// }

//Async version to read file----------------------------------------------------------

// const fs = require("fs")
// fs.readFile("text.txt", "utf8", (err,data) => {
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data);
// })

// Async version to write file*************************************************************

// const fs = require("fs")
// fs.writeFile("text.txt", "This is written synchronoulsy", (err) => {
//     if(err){
//         console.error("error writing file:", err);
//         return
//     }
//     console.log("Successfuly written");
    
// })

// sync version to write file*************************************************************

// const fs = require("fs")
// try {
//     fs.writeFileSync("text.txt","This is written sync")
//     console.log("successfully written");
// } catch(err){
//     console.error(err);
    
// }

//FsPromise version to read file------------------------------------------------------

// const fsPromise = require("fs/promises")

// async function readfile() {
//     try{
//         const data = await fsPromise.readFile("testing.json","utf8")
//         console.log(data);
//     } catch (err){
//         console.error(err);
        
//     }
// }
// readfile()

// Append file------------------------------------------

// const fs = require("fs")

// async function updateFile() {
//     fs.appendFile("./testing.json",JSON.stringify({
//         data: []
//     }),"utf8",(err)=>{
//         if(err) throw err
//     })
//     console.log("success");
// }
// updateFile()

// OR-----

// const fs = require("fs")

// async function updateFile() {
//     log = `sending time: ${new Date()}\n`
//     fs.appendFile("./text.txt",log,"utf8",(err)=>{
//         if(err) throw err
//     })
//     console.log("success");
// }
// updateFile()