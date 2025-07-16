const express = require('express')
const app = express()
const validation = require("./validation.js")
const fs = require('fs')
const fspromise = require("fs/promises")

// app.use((req, res, next) => {
//     console.log("Request time:", new Date,"method",req.method,"URL",req.url);
//     fs.appendFile('./access_logs.txt',log,"utf8",(err) => {
//         if(err) throw err
//     })
//     next()
// })



let users = []

app.use(express.urlencoded({extended: true}))
app.use(express.json({extended: true}))

// Crate User
app.post("/users",validation.createUserRequest, (req, res) => {
    const user = req.body
    console.log(req.body);
    
    const newUser = {
        id: users.length + 1,
        ...user
    }
    users.push(newUser)
    res.send({
        data: newUser
    })
})

// Read all Users

app.get("/users", (req, res) => {
    fspromise.readFile('./database.json', (err, data) => {
    if (err) throw err;
    console.log(data);
}); 
    res.send(users)
})

// Read User by ID

app.get("/users/:id", (req, res) => {
    const userid = parseInt(req.params.id)
    const user = users.find(user => user.id === userid)
    if(!user){
        return res.send("User not found")
    }
    res.send(user)
})

// Update User

app.put("/users/:id", (req, res) => {
    const userid = parseInt(req.params.id)
    const user = users.find(user => user.id === userid)
    if(!user){
        return res.send("User not found")
    }
    user.name = req.body.name
    res.send(user)
})

// Delete User

app.delete("/users/:id", (req, res) => {
    const userid = parseInt(req.params.id)
    const userIndex = users.findIndex(user => user.id === userid)
    if(userIndex === -1){
        return res.send("User not found")
    }
    deleteUser = users.splice(userIndex,1)
    res.send("User Deleted")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log("server started at", `http://localhost:${PORT}`);
})