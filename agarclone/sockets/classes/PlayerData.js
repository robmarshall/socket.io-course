// This is where the data that everyone needs is stored
class PlayerData {
    contructor(playerName, settings) {
        this.name = playerName
        this.locX = Math.floor(settings.worldWidth * Math.random() + 100)
        this.locY = Math.floor(settings.worldHeight * Math.random() + 100)
    }
}
