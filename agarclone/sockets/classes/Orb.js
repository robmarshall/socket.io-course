const getRandomColor = require('../getRandomColor')

class Orb {
    constructor(settings) {
        this.color = getRandomColor()
        this.locX = Math.floor(Math.random() * settings.worldWidth)
        this.locY = Math.floor(Math.random() * settings.worldHeight)
        this.radius = 5
    }
}

module.exports = Orb
