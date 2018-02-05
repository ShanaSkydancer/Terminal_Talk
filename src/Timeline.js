'use strict';

module.exports = class Timeline {
    constructor(author, messageManager) {
        this.author = author;
        this.messageManager = messageManager;
    }

    findAllMessagesBy(author) {
        return this.messageManager.findAllBy(author);
    }

    display() {
        let messages = this.findAllMessagesBy(this.author);
        
        messages.forEach(message => {
            console.log(message.text + ' ' + '(' + message.createdAt.fromNow() + ')' );
        })
    }
}