'use strict';

module.exports = class User {
    constructor(name) {
        this.name = name;
        this.messages = [];
        this.following = [];
    }

    follows(username) {
        this.following.push(username);
    }
}