module.exports = {
    
    createNewUser(req,res,next){
        const rules = {
            username: true,
            email: true,
            password: true
        }
        const keys = Object.keys(rules)
        const errors = {}
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if(!req.body[key]) errors.message = `${key} is required`
        }
        if(errors.message){
            return res.send({errors})
        }
        next()
        
        
    }
}