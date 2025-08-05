const http = require('http')
const fsPromises = require('fs/promises')
const validation = require('./validation.js')
const express = require('express')
const path = require('path')
const { name } = require('ejs')
const { log } = require('console')
const app = express()
app.set("view engine", "ejs")
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'Assets')))

app.get("/login",(req,res) =>{
    res.render('htmlPages/login');
})
app.post('/login', async(req,res) => {
    const {email, password} = req.body
    const content = await fsPromises.readFile('./database.json', {encoding: 'utf8'})
    const data = JSON.parse(content)
    // user = data.users[0].email 
    for (let index = 0; index < data.users.length; index++) {
        const element = data.users[index];
        if(email == data.users[index] && password == data.users[index]){
            console.log('successfully login');
        }
        res.render('htmlPages/login')
        
    }
    
    
})
app.get("/Signin",(req,res) =>{
    res.render('htmlPages/Signin');
})

app.post('/Signin',validation.createNewUser,async (req,res) => {
    user = req.body    
    try{
        const content = await fsPromises.readFile('./database.json',{encoding: 'utf8'})
        const data = JSON.parse(content)
        const newUser = {
            id: data.users.length + 1,
            created_at: new Date(),
            ...user
        }
        data.users.push(newUser)
        await fsPromises.writeFile('./database.json',JSON.stringify(data))
        res.render('htmlPages/Dashboard')

     }
    catch(err){
        console.error(err.message);
        
    }
})

const PORT = 3000
app.listen(PORT,()=> console.log("Server started at port",PORT))