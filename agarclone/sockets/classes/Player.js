// This is where all the data is stored for a player
class Player {
    constructor(socketId, playerConfig, playerData) {
        this.socketId = socketId
        this.playerConfig = playerConfig
        this.playerData = playerData
    }
}

module.exports = Player
