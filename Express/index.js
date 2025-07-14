const express = require('express')
const app = express()

let users = []

app.use(express.json())

app.post("/users", (req, res) => {
    function create(obj) {
        users.push(obj)
    }
    addUser = {
        id: 1,
        name: "abdul"
    }
    addUser2 = {
        id: 2,
        name: "rafay"
    }
    create(addUser)
    create(addUser2)
    res.send("User added")
})

app.get("/users", (req, res) => {
    res.send(users)
})

app.get("/users/:id", (req, res) => {
    const userid = parseInt(req.params.id)
    const user = users.find(user => user.id === userid)
    if(!user){
        return res.send("User not found")
    }
    res.send(user)
})

app.put("/users/:id", (req, res) => {
    const userid = parseInt(req.params.id)
    const user = users.find(user => user.id === userid)
    if(!user){
        return res.send("User not found")
    }
    user.name = req.body.name
    res.send(user)
})

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