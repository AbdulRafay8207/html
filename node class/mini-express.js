const utils = require('./utils.js')
const http = require("http")
const app = require("./app.js")
module.exports = class miniExpress{
   constructor(){
     this.routes = {}
   }
 get(path, ...callback){
    if(!this.routes.GET) this.routes.GET = {}
    this.routes.GET[path] = callback
}

 post(path, ...callback){
    if(!this.routes.POST) this.routes.POST = {}
    this.routes.POST[path] = callback
}
 requestHandler (req,res){
    utils.requestParser(req)
    const route = this.routes[req.method]?.[req.path]
    if(!route) return res.end("Page not found")
    for(let i=0; i< routes.length; i++){
    const routeCallback = route[i]
    routeCallback(req, res)
   }
 }
 listen(port){
   const server = http.createServer(this.requestHandler.bind(this))
   server.listen(port, ()=>{
      console.log("Server started on port", port);
      
   })
 }
}