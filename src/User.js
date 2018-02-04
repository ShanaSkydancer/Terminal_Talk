'use strict';

module.exports = class User {
    constructor(name, message) {
        this.name = name;
        this.messages = [message];
    }
}