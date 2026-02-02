const http = require('http')
const express = require("express")
const cors = require('cors')
const products = require('./products')

const app = express()

app.use(cors({
    origin: ["http://127.0.0.1:5500"]
}))
app.use((req,res,next)=>{
    console.log(req.method, req.path);
    next()
    
})
app.use(express.json())

app.use('/products', products)

app.get('/message', (req,res)=>{
    res.send({message: "hellllooo owoolrrlldlldldlld"})
})

app.post('/message',(req,res)=>{
    const {name,message} = req.body

    console.log("New message",name,message);
    res.send({message: "thx fpr ur sh"})
    
})

app.listen(3000,()=>console.log("server running on port 3000"))