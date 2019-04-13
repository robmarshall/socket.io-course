function joinRoom(roomName) {
    // Send roomname to server
    nsSocket.emit('joinRoom', roomName, newNumberOfUsers => {
        // Update room member total
        document.querySelector(
            '.curr-room-num-users-count'
        ).innerHTML = newNumberOfUsers
        document.querySelector('.curr-room-text').innerText = `${roomName}`
    })
    nsSocket.on('historyCatchUp', history => {
        console.log(history)
        const messagesUl = document.querySelector('#messages')
        messagesUl.innerHTML = ''
        history.forEach(msg => {
            const newMsg = buildHTML(msg)
            const currentMessages = messagesUl.innerHTML
            messagesUl.innerHTML = currentMessages + newMsg
        })
        messagesUl.scrollTo(0, messagesUl.scrollHeight)
    })
    nsSocket.on('updateMembers', numMembers => {
        document.querySelector(
            '.curr-room-num-users-count'
        ).innerHTML = numMembers
    })
}
