const fsPromises = require('fs/promises')
const fs = require('fs')

const validations = require('./validations');
const express = require('express');
const { log } = require('console');
const app = express()
const controller = require('./controllers/Controller')

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))
app.set("view engine", "ejs")   

// async function getFileData() {
//     try {
//         const contents = await fsPromises.readFile('./users.json', { encoding: 'utf8' });
//         console.log(contents);
//     } catch (err) {
//         console.error(err.message);
//     }
// }

// getFileData()

// async function updateFile() {
//     fs.appendFile('./users.json', JSON.stringify({
//         data: []
//     }), 'utf8', (err) => {
//         if (err) throw err;
//     });
// }

// updateFile()
// updateFile()

app.use((req, res, next) => {
    const log = `REQUEST TIME: ${new Date()} :::: METHOD: ${req.method} :::: URL: ${req.url}\n`
    fs.appendFile('./access_logs.txt', log, 'utf8', (err) => {
        if (err) throw err;
    });

    next();
})

/**
 * Users data
 */
// const users = []


/**
 * READ USER BY ID
 */
app.get('/users/:id',controller.getbyID)
/**
 * CREATE USER
 */
app.post('/users', validations.createUserRequest,controller.create)
/**
 * UPDATE USER
 */
app.patch('/users',controller.update)
/**
 * DELETE USER
 */
app.delete('/users/:id',controller.destroy)



const PORT = 3000
app.listen(PORT, () => {
    console.log('Server started at', `http://localhost:${PORT}`)
})