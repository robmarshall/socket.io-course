function joinRoom(roomName) {
    // Send roomname to server
    nsSocket.emit('joinRoom', roomName, newNumberOfUsers => {
        // Update room member total
        document.querySelector(
            '.curr-room-num-users-count'
        ).innerHTML = newNumberOfUsers
    })
}
