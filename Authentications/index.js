const http = require('http')
const express = require('express')
const app = express()
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

function cookieParser(headers){
    if(!headers.cookie) return{};
    const cookieObj = {}
    const cookiesArr = headers.cookie.split("; ")
    for (let index = 0; index < cookiesArr.length; index++) {
        const cookie = cookiesArr[index];
        const cookieArr = cookie.split('=')
        cookieObj[cookieArr[0]] = cookieArr[1]
    }
    return cookieObj
}

app.use((req,res,next)=>{
    const cookies = cookieParser(req.headers)
    req.cookies = cookies
    
    next()
})

const users = [
    {
        id:1,
        username: "abdullah",
        password: 1234
    }
]

const sessions = {}

app.post('/login', (req, res) => {
    const {username,password} = req.body || {};
    if(!username || !password) return res.status(400).send({ error: "Username & password required" });
    const user = users.find(u=>u.username === username && u.password == password)
    if(!user) return res.status(400).send({ error: "Credentials not match" });
    const sessionsId = Math.ceil(Math.random() * 1000000000)
    sessions[sessionsId] = user.id
    res.setHeader('Set-Cookie', `sessionId=${sessionsId}; HttpOnly; Path=/;`)
    res.send({
        message: "Successsfully logged in"
    })
    console.log(sessions);
    
    //Another Method
    // res.send({
    //     sessionsId
    // })
})

const checkAuth = (req,res,next) => {
    console.log(req.cookies);
    // console.log(req.body);
    
    
    // const {sessionsId} = req.body || {};
    // console.log(sessionsId);
    
    if(!req.cookies.sessionsId || !sessions[req.cookies.sessionsId]) return res.send("unAuth")
    next()
}

app.get('/dashboard',checkAuth, (req,res)=>{
    res.send("protected data")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log("server started at port", PORT);


})