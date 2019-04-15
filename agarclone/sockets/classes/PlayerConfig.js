// This is where all the data is stored that no other player needs
class PlayerConfig {
    contructor(settings) {
        this.xVector = 0
        this.yVector = 0
        this.speed = settings.defaultSpeed
        this.zoom = settings.defaultZoom
    }
}

module.exports = PlayerConfig
