const http = require("http")
const express = require("express")
const fs = require("fs")
const url = require("url")

const app = express()


app.get('/home',(req,res)=>{
const myurl = url.parse(req.url,true)
// console.log(myurl);
const query = myurl.query
const name = query.name
const id = query.id
    const log = `${Date.now()}: ${req.url}\n`
    console.log(req);
    
    fs.appendFile('./logs.txt',log, ()=>{})
    res.send(`OLA ${name} and your id is ${id}`)
})

app.listen(5000,()=>console.log("server running on port 5000--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
)