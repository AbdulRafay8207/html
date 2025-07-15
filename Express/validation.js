module.exports = { 
    createNewUserRequest(req, res, next){
    const rules = {
        username: {
            required: true
        },
        password: {
            type: "string",
            min: 8,
            required: true
        },
        email: {

        }
    }
    const keys = Object.keys(rules) 
    const errors = {}
    for(let index = 0; index< keys.length; index++){
        const key = keys[index]
        if(!key) continue
        if(!req.body[key]){
            errors[key] = `${key} is required`
            errors.error = true
        } 
    }
if(errors){
    return res.status(422).send({errors})
}
next()
}}
