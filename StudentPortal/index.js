const http = require('http')
const express = require('express')
const app = express()
app.set("view engine", "ejs")

app.get("/login",(req,res) =>{
    res.render('htmlPages/login');
})


const PORT = 3000
app.listen(PORT,()=> console.log("Server started at port",PORT))