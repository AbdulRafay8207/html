module.exports = {
    requestParser(req){
        const [path, query] = req.url.split("?")
        req.path = path
        if(query) {
            const queryArr = query.split("&")
            const queryObj = {}
            for(let i = 0; i < queryArr.length; i++){
                const [key, value] = queryArr[i].split("=")
                queryObj[key] = value
            }
            req.query = queryObj;
        } else {
            req.query = {}
        }
    }
}