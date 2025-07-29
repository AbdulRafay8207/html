const http = require('http')
const fsPromises = require('fs/promises')
const express = require('express')
const app = express()
app.set("view engine", "ejs")
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended: true}))

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
        if(!req.body[key]) errors.message = `${key} is required`
    }
    if(errors.message){
        return res.send({errors})
    }
    next()
    
    
}

app.get('/dashboard',(req, res) => {
    res.render('htmlPages/Dashboard')
})

app.post('/login',createNewUser,async (req,res) => {
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