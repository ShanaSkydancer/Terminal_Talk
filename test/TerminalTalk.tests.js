'use strict';

const TerminalTalk = require("../src/TerminalTalk");
const Database = require('../src/Database.js')
const UserManager = require('../src/UserManager.js')
const MessageManager = require('../src/MessageManager.js')
const assert = require('assert');
const sinon = require('sinon');


describe('the TerminalTalk class', function() {
    
    let database = new Database();
    let userManager = new UserManager(database);
    let messageManager = new MessageManager(database);
    let terminalTalk = new TerminalTalk(userManager, messageManager);

    afterEach(function(){
        database.clear();
    });

    it(`should create and save a User
    along with the associated Message given the appropriate input`, function() {
        terminalTalk.handleInput('Shana -> Hello Terminal Talk People!');
        let user = userManager.findByName('Shana');

        assert.equal(user.name, 'Shana');
        assert.equal(user.messages[0].text, 'Hello Terminal Talk People!')
    });
   
    it(`should display the correct timeline`, function() {
        terminalTalk.handleInput('Shana -> Hello Terminal Talk People!');
        terminalTalk.handleInput('Sandro -> Welcome to T_T');
        terminalTalk.handleInput('Sandro -> Everyone - what up!!??!');
        let spy = sinon.spy(console, 'log');
        terminalTalk.handleInput('Sandro');

        assert(spy.calledWith('Welcome to T_T', 'Everyone - what up!!??!'))
        spy.restore();
    })
});