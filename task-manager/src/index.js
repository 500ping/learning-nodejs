const express = require('express')
require('./db/mongoose')

const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
    dest: 'images'
})
app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// Withour Middleware : new request -> run route handle
// With middleware: new request -> do something -> run route handle

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const jwt = require('jsonwebtoken')

// const myFunc = async () => {
//     const token = jwt.sign({
//         _id: 'test123'
//     }, 'secret', {
//         expiresIn: '7 days'
//     })
//     console.log(token)

//     const data = jwt.verify(token, 'secret')
//     console.log(data)
// }

// myFunc()