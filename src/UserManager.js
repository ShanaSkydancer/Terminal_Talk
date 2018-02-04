'use strict';

module.exports = class UserManager {
    constructor(database) {
        this.database = database;
    }

    save(user) {
        this.database.data.push(user);
    }

    getAll(user) {
        return this.database.data;
    }
}