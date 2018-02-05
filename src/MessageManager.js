'use strict';

const find = require('lodash.find');
const moment = require('moment');

module.exports = class MessageManager {
    constructor(database) {
        this.database = database;
    }

    save(message) {
        let user = find(this.database.data, ['name', message.author])
        user.messages.push(message);
    }

    findAllBy(author) {
        let matchingAuthor = this.database.data.find(user => user.name === author);
        return this.sortAscending(matchingAuthor.messages);
    }

    sortAscending(messages) {
        return messages.sort((a, b) => b.createdAt.diff(a.createdAt));
    }
}