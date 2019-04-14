// Where all main socket code goes
const io = require('../servers').io

const Orb = require('./classes/Orb')
let orbs = []

initGame()

io.sockets.on('connect', socket => {
    // A player has connected
    // Make a play config object

    // let playerConfig = new PlayerConfig()
    // let playerData = new PlayerData()

    // Make a master player object
    // let player = new Player(socket.id, playerConfig, playerData)

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
