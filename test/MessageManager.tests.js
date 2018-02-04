'use strict';

const Database = require('../src/Database.js');
const User = require('../src/User.js');
const UserManager = require('../src/UserManager.js');
const MessageManager = require('../src/MessageManager.js');
const Message = require('../src/Message.js');
const assert = require('assert');
const moment = require('moment');

describe('MessageManager class', function() {
    it(`should save User's messages`, function() {
        let database = new Database();
        let userManager = new UserManager(database);
        let messageManager = new MessageManager(database);
        let user = new User('Shana');
        let messageOne = new Message('Shana', 'Hello Terminal Talk People!', moment());
        let messageTwo = new Message('Shana', 'Happy to be here.', moment());

        userManager.save(user);
        messageManager.save(messageOne);
        messageManager.save(messageTwo);

        assert.deepEqual(userManager.findByName('Shana').messages, [messageOne, messageTwo]);
    });
});