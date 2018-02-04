'use strict';

const TerminalTalk = require("../src/TerminalTalk");
const Database = require('../src/Database.js')
const UserManager = require('../src/UserManager.js')
const MessageManager = require('../src/MessageManager.js')
const assert = require('assert');

describe('the TerminalTalk class', function() {
    it(`should create and save a User
    along with the associated Message given the appropriate input`, function() {
        let database = new Database();
        let userManager = new UserManager(database);
        let messageManager = new MessageManager(database);
        let terminalTalk = new TerminalTalk(userManager, messageManager);
        terminalTalk.handleInput('Shana -> Hello Terminal Talk People!');
        let user = userManager.findByName('Shana');

        assert.equal(user.name, 'Shana');
        assert.equal(user.messages[0].text, 'Hello Terminal Talk People!')
    });
});
