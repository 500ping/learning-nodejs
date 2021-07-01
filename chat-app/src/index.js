const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000

const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

// let count = 0

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.emit('message', 'Welcome!')
    socket.broadcast.emit('message', 'A new user has joined!')

    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left!')
    })

    socket.on('sendLocation', (loc) => {
        io.emit('message', `https://google.com/maps?q=${loc.lat},${loc.lon}`)
    })
})

server.listen(port, () => {
    console.log('Server is up on port ' + port)
})