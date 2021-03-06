'use strict';

const TerminalTalk = require("../src/TerminalTalk.js");
const Database = require('../src/Database.js');
const UserManager = require('../src/UserManager.js');
const MessageManager = require('../src/MessageManager.js');
const assert = require('assert');
const sinon = require('sinon');

describe('the TerminalTalk class', () => {
    
    let database = new Database();
    let userManager = new UserManager(database);
    let messageManager = new MessageManager(database);
    let terminalTalk = new TerminalTalk(userManager, messageManager);

    afterEach(() => {
        database.clear();
    });

    it(`should create and save a User
    along with the associated Message given the appropriate input`, () => {
        terminalTalk.handleInput('Shana -> Hello Terminal Talk People!');
        let user = userManager.findByName('Shana');

        assert.equal(user.name, 'Shana');
        assert.equal(user.messages[0].text, 'Hello Terminal Talk People!')
    });
   
    it(`should display the correct timeline`, () => {
        terminalTalk.handleInput('Shana -> Hello Terminal Talk People!');
        terminalTalk.handleInput('Sandro -> Welcome to T_T');
        terminalTalk.handleInput('Sandro -> Everyone - what up!!??!');
        let spy = sinon.spy(console, 'log');
        terminalTalk.handleInput('Sandro');

        assert(spy.calledWith('Welcome to T_T (a few seconds ago)'));
        assert(spy.calledWith('Everyone - what up!!??! (a few seconds ago)'));
        console.log.restore();
    })

    it(`should allow a User to follow another User`, function() {
        terminalTalk.handleInput('Sandro -> Welcome to T_T');
        terminalTalk.handleInput('Shana -> Hello Terminal Talk People!');
        terminalTalk.handleInput('Kylo -> I wish Rey was on my side...')
        terminalTalk.handleInput('Shana follows Sandro');
        terminalTalk.handleInput('Shana follows Kylo');

        let followingList = userManager.findByName('Shana').following;

        assert.deepEqual(followingList, ['Sandro', 'Kylo'])
    })

    it(`should display a User's wall correctly`, function() {
        terminalTalk.handleInput('Sandro -> Welcome to T_T');
        terminalTalk.handleInput('Shana -> Hello Terminal Talk People!');
        terminalTalk.handleInput('Kylo -> I wish Rey was on my side...')
        terminalTalk.handleInput('Shana follows Sandro');
        terminalTalk.handleInput('Shana follows Kylo');
        let spy = sinon.spy(console, 'log');
        
        terminalTalk.handleInput('Shana wall')

        assert(spy.calledWith('Kylo - I wish Rey was on my side... (a few seconds ago)'));
        assert(spy.calledWith('Shana - Hello Terminal Talk People! (a few seconds ago)'));
        assert(spy.calledWith('Sandro - Welcome to T_T (a few seconds ago)'));
        
        console.log.restore();
    })
});