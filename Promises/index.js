const MyPromises = new Promise((res, rej) => {
    const result = 5+5
    if(result === 11){
        res("Fulfulled")
    }
    else{
        rej("wroooooonngggg")
    }
})
MyPromises.then(message =>{
    console.log(message);
}).catch(message =>{
    console.log(message);
    
})