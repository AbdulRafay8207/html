module.exports = {
     routes: {},

 get(path, callback){
    if(!this.routes.GET) this.routes.GET = {}
    this.routes.GET[path] = callback
},

 post(path, callback){
    if(!this.routes.POST) this.routes.POST = {}
    this.routes.POST[path] = callback
},
 requestHandler (req,res){
    requestParser(req)
    const routes = app.routes[req.method]?.[req.path]
    if(routes) routes(req, res)
    else res.end("Page not found")
 }
}