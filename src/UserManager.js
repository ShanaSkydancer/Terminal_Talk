'use strict';

const find = require('lodash.find');

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

    findByName(name) {
        return find(this.database.data, ['name', name]);
        // return find(this.database.data, {name : name});        
    }
}