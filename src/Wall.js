'use strict';

module.exports = class Wall {
    constructor(user, messageManager) {
        this.user = user;
        this.messageManager = messageManager;
    }

    gatherAllMessages() {
        let messageList = [];

        this.user.messages.forEach(message => {
            messageList.push(message);
        });

        this.user.following.forEach(username => {
            this.messageManager.findAllBy(username).forEach(message => {
                messageList.push(message);
            })
        })

        return this.messageManager.sortAscending(messageList);
    }

    formattedMessages() {
        let messagesForWall = this.gatherAllMessages();
        let messagesInWallFormat = [];

        messagesForWall.forEach(message => {
            let text = message.author + ' - ' + message.text + ' (' + message.createdAt.fromNow() + ')';
            messagesInWallFormat.push(text);
        })

        return messagesInWallFormat;
    }

    display() {
        this.formattedMessages().forEach(message => {
            console.log(message);
        })
    }
}