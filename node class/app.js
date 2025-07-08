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

// const http = require("http")
// const app = require("./mini-express")

// // obj = {
// //     "GET": {
// //         "/": (req, res)=>{
// //             res.end("Get object");
// //         },
// //         "/users": ()=>{}
// //     },
// //     "POST": {
// //         "/": (req, res)=>{
// //             console.log("Get object");
// //         },
// //         "/users": ()=>{}
// //     },
// //     "PATCH": {
// //         "/": (req, res)=>{
// //             console.log("Get object");
// //         },
// //         "/users": ()=>{}
// //     },
// //     "DELETE": {
// //         "/": (req, res)=>{
// //             console.log("Get object");
// //         },
// //         "/users": ()=>{}
// //     }
// // }



// function requestParser(req) {
//     const [path, query] = req.url.split("?")

//     req.path = path;
//     if (query) {
//         const queryArray = query.split("&");
//         const queryObj = {};
//         for (let i = 0; i < queryArray.length - 1; i++) {
//             const [key, value] = queryArray[i].split("=");
//             queryObj[key] = value;
//         }
//     }

// }

// const getDashboardPage = (req, res) => {
//     res.end("Dashboard page")
// }
// // const getLoginPage = (req, res) => {
// //     res.end("Login Page")
// // }
// const getProfilePage = (req, res) => {
//     res.end("Profile Page")
// }
// // const postLoginRequest = (req, res) => {
// //     res.end("Post login Page")
// // }


// app.get("/login", (req, res) => {
//     res.end("Login Pageee")
// })
// // console.log(">>>>", routes);
// app.post("/login", (req, res) => {
//     res.end("Post login Page")
// })
// // console.log(">>>>", routes );

// const requestHandler = (req,res)=>{
//     requestParser(req)
//     const routes = app.routes[req.method]?.[req.path]
//     if(routes) routes(req, res)
//     else res.end("Page not found")

//     // if(req.path === "/" && req.method === "GET"){
//     //     getDashboardPage(req, res)
//     // }

//     // else if(req.path === "/login" && req.method === "GET"){
//     //     getLoginPage(req, res)
//     // } 
//     // else if(req.path === "/user" && req.method === "GET"){
//     //     getProfilePage(req, res)
//     // } 
//     // else if(req.path === "/login" && req.method === "POST"){
//     //     postLoginRequest(req, res)
//     // } else res.end("Page not found")

//     // if(req.url == "/" && req.method == "GET"){
//     //     // console.log("Get request");
//     //     return res.end("Get")
//     // }

//     // else if(req.url == "/" && req.method == "POST"){
//     //     // console.log("Post request");
//     //     return res.end("Post")
//     // }

//     // else if(req.url == "/" && req.method == "PATCH"){
//     //     // console.log("Patch request");
//     //     return res.end("Patch")
//     // }

//     // else if(req.url == "/" && req.method == "DELETE"){
//     //     // console.log("Delete request");
//     //     return res.end("Delete")
//     // }
    
// }

// const server = http.createServer(requestHandler)
// const PORT = 3000
// server.listen(PORT, ()=>{
//     console.log("server started on port", PORT);
// })

//---------------------------------------------------------

const miniExpress = require('./mini-express.js')
// const app = require('./mini-express.js') 

const app = new miniExpress()

app.get('./login', (req, res) => {
    res.end('login page')
})

app.post('/login', (req, res) => {
    res.end('Post Login Request')
})

app.listen(3000)