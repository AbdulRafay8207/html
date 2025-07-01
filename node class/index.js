//Import and Export Methods----------------------

// import airth from "./myMaths.js"
// console.log(airth.sum(1,3));
// console.log(airth.subtract(4,2));

//2nd method----------------------------------

// const airth = require("./myMaths.js")
// console.log(airth.sum(2,3));
// console.log(airth.subtract(4,2));

// CRUD------------------------------------------------------------------------

// const users = []

// function create(obj){
//     users.push(obj)
//     return users
    
// }

// const user1 = {
//     id: 1,
//     name: "abdul",
//     email: "example@gmail.com"
// }
// console.log("Create : ", 0);

// function getUserById(id){
//     const user = users.find((user)=> user.id === id)
//     if(!user) return new Error("No user found")
//     return users
// }
// console.log("Read User by id: ", getUserById(1))
// function updateUser(id,data){
//     const userIndex = users.findIndex((user)=> user.id === id)
//     if(user === -1) return new Eroor("No user found")
//     const user = {...users[userIndex],...data}
//     users.splice(userIndex,1,user)
//     return users
// }
// function deleteUser(id){
//     const userIndex = users.findIndex((user)=> user.id === id)
//     if(user === -1) return new Eroor("No user found")
//     const user = {...users[userIndex],...data}
//     users.splice(userIndex,1)
//     return users
// }

//---------------------------------------------------------------------------------

// const http = require("./myMaths.js")

// const requestHandler = (req,res)=>{
//     res.end()
// }

// const server = http.createServer(requestHandler)
// server.listen(3000)

//-----------------------------------------------------------------------------------

const http = require("http")

function requestParser(){
    
}

const requestHandler = (req,res)=>{

    console.log(">>>>", req.url, req.method);
    res.end()
}

const server = http.createServer(requestHandler)
const PORT = 3000
server.listen(PORT, ()=>{
    console.log("server started on port", PORT);
})