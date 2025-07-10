const express = require('express')
const app = express()

// app.get('/:username', (req, res) => {
//     // res.send(JSON.stringify({
//     //     message: "Dashboard page" // Content type change
//     // }))
//     res.send({
//         path: req.path,
//         requObject: req.params,
//         message: "Dashboard page"
//     })
// })

app.use(()=>{
    console.log('Inside use function');
    
})

function checkLogin(req, res, next){
    console.log("Inside Login");
    const login = true
    if(!login) res.send("Please Login First")
    next()
}
app.get('/account',checkLogin,(req, res)=>{
    console.log("Account Page");
    res.send("Account Page")
    
})






const PORT = 3000
app.listen(PORT, ()=>{
    console.log("server started at", `http://localhost:${PORT}`);
})