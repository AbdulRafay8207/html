const http = require("http")

function requestParser(req) {
    const [path, query] = req.url.split("?")

    req.path = path;
    if (query) {
        const queryArray = query.split("&");
        const queryObj = {};
        for (let i = 0; i < queryArray.length - 1; i++) {
            const [key, value] = queryArray[i].split("=");
            queryObj[key] = value;
        }
    }

}

const getDashboardPage = (req, res) => {
    res.end("Dashboard page")
}
const getLoginPage = (req, res) => {
    res.end("Login Page")
}
const getProfilePage = (req, res) => {
    res.end("Profile Page")
}
const postLoginRequest = (req, res) => {
    res.end("Post login Page")
}

const obj = {
    GET: {
        "/": getDashboardPage,
        "/login": getLoginPage,
        "/profile": getProfilePage
    },
    POST: {
        "/login": postLoginRequest
    }
}

const requestHandler = (req,res)=>{
    requestParser(req)

    if(req.path === "/" && req.method === "GET"){
        getDashboardPage(req, res)
    }

    else if(req.path === "/login" && req.method === "GET"){
        getLoginPage(req, res)
    } 
    else if(req.path === "/user" && req.method === "GET"){
        getProfilePage(req, res)
    } 
    else if(req.path === "/login" && req.method === "POST"){
        postLoginRequest(req, res)
    } else res.end("Page not found")
}

const server = http.createServer(requestHandler)
const PORT = 3000
server.listen(PORT, ()=>{
    console.log("server started on port", PORT);
})