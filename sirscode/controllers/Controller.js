module.exports = {
    async getbyID(req, res) {
        const id = req.params.id
        try {
            const contents = await fsPromises.readFile('../database.json', { encoding: 'utf8' });
            const data = JSON.parse(contents)
            const user = data.users.find(user => user.id === parseInt(id))
            if (!user || (!req.query.admin && user.deleted_at)) return res.status(404).send('User not found');
            res.send({
                data: user
            })
        } catch (err) {
            console.error(err.message);
        }


        res.send({
            data: user
        })

    },
    async create(req, res) {
        const user = req.body;

        try {
            // const contents = await fsPromises.readFile('../database.json', { encoding: 'utf8' });
            // const data = JSON.parse(contents) goes to User.js file

            const newUser = {
                id: data.users.length + 1,
                created_at: new Date(),
                ...userLoginController
            }

            data.users.push(newUser)
            await fsPromises.writeFile('../database.json', JSON.stringify(data))

            res.send({
                data: newUser
            })
        } catch (err) {
            console.error(err.message);
        }
    },

    update(req, res) {
        res.send('Users page')
    },

    async destroy(req, res){
    const id = parseInt(req.params.id)
    try {
        const contents = await fsPromises.readFile('../database.json', { encoding: 'utf8' });
        const data = JSON.parse(contents)
        const user = data.users.find(user => user.id === id);
        if (!user) return res.status(404).send('User not found');
        user.deleted_at = new Date()
        await fsPromises.writeFile('../database.json', JSON.stringify(data))
        res.status(203)
        res.send({ message: 'User deleted' })
    } catch (err) {
        console.error(err.message);
    }
}

}