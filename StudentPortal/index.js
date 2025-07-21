const http = require('http')
const express = require('express')
const app = express()
app.set("view engine", "ejs")

app.get("/login",(req,res) =>{
    res.render('htmlPages/login');
})

function createNewUser(req,res,next){
    const rules = {
        username: true,
        password: true
    }
    const keys = Object.keys(rules)
    const errors = {}
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
    }
    
    next()
}

app.post('/login',(req,res) => {

})


const PORT = 3000
app.listen(PORT,()=> console.log("Server started at port",PORT))