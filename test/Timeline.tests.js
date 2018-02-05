'use strict';

const Database = require('../src/Database.js')
const User = require('../src/User.js')
const UserManager = require('../src/UserManager.js')
const MessageManager = require('../src/MessageManager.js')
const Message = require('../src/Message.js')
const Timeline = require('../src/Timeline.js')
const assert = require('assert');
const moment = require('moment');
const sinon = require('sinon');

describe('Timeline Class', function() {
    it(`should get all Messages for a User,
    and order them in ascending order by created time,
    and display them to the console`, function() {
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
        
        let timeline = new Timeline('Shana', messageManager);
        let spy = sinon.spy(console, 'log');
        timeline.display();


        assert(spy.calledWith('I love cats! (5 minutes ago)'));
        assert(spy.calledWith('Hello Terminal Talk People! (8 minutes ago)'));        
        console.log.restore();
    });
});