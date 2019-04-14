// Where all main socket code goes
const io = require('../servers').io

const Orb = require('./classes/Orb')
let orbs = []

initGame()

io.sockets.on('connect', socket => {
    socket.emit('init', {
        orbs,
    })
})

// Run at begining of new game
function initGame() {
    for (let i = 0; i < 500; i++) {
        orbs.push(new Orb())
    }
}

module.exports = io
