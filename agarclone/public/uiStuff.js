let wWidth = $(window).width()
let wHeight = $(window).height()
let player = {} // This is all things for the player

let canvas = document.querySelector('#the-canvas')
let context = canvas.getContext('2d')

canvas.width = wWidth
canvas.height = wHeight

$(window).load(() => {
    $('#loginModal').modal('show')
})

$('.name-form').submit(event => {
    event.preventDefault()
    player.name = document.querySelector('#name-input').value
    document.querySelector('.player-name').innerHTML = player.name
    $('#loginModal').modal('hide')
    $('#spawnModal').modal('show')
})

$('.start-game').click(() => {
    $('.modal').modal('hide')
    $('.hiddenOnStart').removeAttr('hidden')
    init()
})
