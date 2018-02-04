'use strict';

module.exports = class Database {
    constructor() {
        this.data = [];
    }

    saveUser(user) {
        this.data.push(user);
    }

    getAllUsers(user) {
        return this.data;
    }
}