'use strict';

const Database = require('../src/Database.js');
const User = require('../src/User.js');
const UserManager = require('../src/UserManager.js');
const MessageManager = require('../src/MessageManager.js');
const assert = require('assert');
const moment = require('moment');

describe('MessageManager class', function() {
    it(`should save User's messages`, function() {
        let database = new Database();
        let messageManager = new MessageManager(database);
        let user = new User('Shana');
        let messageOne = new Message('Hello Terminal Talk People!');
        let messageTwo = new Message('Happy to be here.');

        userManager.save(user);
        messageManager.save(messageOne);
        messageManager.save(messageTwo);
        
        assert.equal(userManager.find({name: 'Shana'}).messages, [messageOne, messageTwo]);
    });
});