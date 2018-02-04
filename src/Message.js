'use strict';

module.exports = class Message {
    constructor(author, text, createdAt) {
        this.author = author;
        this.text = text;
        this.createdAt = createdAt;
    }
}