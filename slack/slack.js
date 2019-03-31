const express = require('express')
const app = express()
const socketio = require('socket.io')

let namespaces = require('./data/namespaces')

app.use(express.static(__dirname + '/public'))
const expressServer = app.listen(9000)
const io = socketio(expressServer)

io.on('connection', socket => {
    // Build an array to send back with img and endpoint
    let nsData = namespaces.map(ns => {
        return {
            img: ns.img,
            endpoint: ns.endpoint,
        }
    })
    // Send the ns data back to the client
    // Need to use socket not IO, because it
    // needs to go just to this client
    socket.emit('nsList', nsData)
})

// Loop through namespaced and listen for connections
namespaces.forEach(namespace =>
    io.of(namespace.endpoint).on('connection', nsSocket => {
        console.log(`${nsSocket.id} has joined ${namespace.endpoint}`)
        // A socket has connected to one of our namespaces
        // Now send info back
        nsSocket.emit('nsRoomLoad', namespaces[0].rooms)
    })
)
