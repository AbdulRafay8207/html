const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    const products = [
        {id: 1, name: "laptop", price: "34000"},
        {id: 2, name: "mobile", price: "20000"}
    ]
    res.send(products)
})

router.get('/specials', (req,res)=>{
    const special = [
        {id: 1, name: "pc", price: "100000"},
        {id: 2, name: "watch", price: "26000"}
    ]
    res.send(special)
})

router.get('/:id', (req,res)=>{
    const id = Number(req.params.id)

    const products = [
        {id: 1, name: "laptop", price: "34000"},
        {id: 2, name: "mobile", price: "20000"}
    ]
    
    const requestedProduct = products.find(product => product.id === id)
    res.send(requestedProduct)
})


module.exports = router