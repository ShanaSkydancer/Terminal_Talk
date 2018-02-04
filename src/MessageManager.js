'use strict';

const find = require('lodash.find');

module.exports = class MessageManager {
    constructor(database) {
        this.database = database;
    }

    save(message) {
        let user = find(this.database.data, ['name', message.author])
        user.messages.push(message);
    }
}