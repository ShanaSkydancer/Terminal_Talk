'use strict';

const TerminalTalk = require("../src/TerminalTalk");
const Database = require('../src/Database.js')
const UserManager = require('../src/UserManager.js')
const assert = require('assert');

describe('the TerminalTalk class', function() {
    it(`should create and save a User
    along with the associated Message given the appropriate input`, function() {
        let database = new Database();
        let userManager = new UserManager(database);
        let messageManager = new MessageManager(database);
        let terminalTalk = new TerminalTalk(userManager, postManager);
        terminalTalk.handleInput('Shana -> Hello Terminal Talk People!');
        let user = userManager.find({name: 'Shana'});

        assert.equal(user.name, 'Shana');
        assert.equal(user.posts[0].text, 'Hello Terminal Talk People!')
    });
});
