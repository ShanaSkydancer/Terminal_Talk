'use strict';

module.exports = class InputParser {
    constructor() {
        this.username = '';
        this.action = '';
        this.directObject = '';
    }

    parse(input) {
        let inputAsArray = input.split(' ');
        this.username = inputAsArray[0];
        this.action = inputAsArray[1];
        this.directObject = inputAsArray.slice(2).join(" ");
        return this;
    }
}