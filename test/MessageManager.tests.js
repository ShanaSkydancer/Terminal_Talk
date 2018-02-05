'use strict';

const Database = require('../src/Database.js');
const User = require('../src/User.js');
const UserManager = require('../src/UserManager.js');
const MessageManager = require('../src/MessageManager.js');
const Message = require('../src/Message.js');
const assert = require('assert');
const moment = require('moment');

describe('MessageManager class', function() {
    it(`should save User's messages,
        and it should find and return all Messages by the given author
        in ascending order`, function() {
            let database = new Database();
            let userManager = new UserManager(database);
            let messageManager = new MessageManager(database);
            let user = new User('Shana');

            let messageOne = new Message('Shana',
            'Hello Terminal Talk People!',
            moment().subtract(8, 'minutes'));

            let messageTwo = new Message('Shana',
            'I love cats!',
            moment().subtract(5, 'minutes'));

            userManager.save(user);
            messageManager.save(messageOne);
            messageManager.save(messageTwo);

            assert.deepEqual(messageManager.findAllBy('Shana'), [messageTwo, messageOne]);
    });
});