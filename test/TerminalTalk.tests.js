'use strict';

// var TerminalTalk = require("../TerminalTalk");
const assert = require('assert');

describe('the TerminalTalk class', function() {
    it(`should create and save a User
    along with the associated Message given the appropriate input`, function() {
        let database = new Database();
        let terminalTalk = new TerminalTalk(database);
        terminalTalk.handleInput('Shana -> Hello Terminal Talk People!');
        let user = database.findUserByName('Shana');

        assert.equal(user.name, 'Shana');
        assert.deepEqual(user.messages, ['Hello Terminal Talk People!']);
    });
});
