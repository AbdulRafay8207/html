const http = require('http')
const jwt = require('jsonwebtoken');
const express = require('express')
const app = express()
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
const SECRET_KEY = "my_secret_key"

const user = {
    id: 1,
    username: "abdullah",
    password: "1234"
}

app.post('/login',(req,res)=>{
    const {username, password} = req.body
    if(username === user.username && password === user.password){
        token = jwt.sign({id: user.id},SECRET_KEY)
        res.send(token)
    }else{
        res.send("Error")
    }
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log('server started at',PORT);
    
})