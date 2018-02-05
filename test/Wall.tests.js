'use strict';

const Database = require('../src/Database.js');
const UserManager = require('../src/UserManager.js');
const MessageManager = require('../src/MessageManager.js');
const User = require('../src/User.js');
const Message = require('../src/Message.js');
const moment = require('moment');

describe('Wall Class', function() {
    it(`should display a User's wall correctly`, function() {
        let database = new Database();
        let userManager = new UserManager(database);
        let messageManager = new MessageManager(database);
        let userOne = new User('Shana');
        let userTwo = new User('Sandro');
        let userThree = new User('Kylo');

        let shanaMessage = new Message('Shana',
        'Hello Terminal Talk People!',
        moment().subtract(5, 'minutes'))

        let sandroMessageOne = new Message('Sandro',
        'Welcome to T_T',
        moment().subtract(8, 'minutes'))

        let sandroMessageTwo = new Message('Sandro',
        'I feel like seafood tonight!',
        moment().subtract(3, 'minutes'))

        let kyloMessage = new Message('Kylo',
        'I wish Rey was on my side...',
        moment().subtract(2, 'minutes'))

        userOne.follows('Sandro');
        userOne.follows('Kylo');
        
        userManager.save(userOne);
        userManager.save(userTwo);
        userManager.save(userThree);

        messageManager.save(shanaMessage);
        messageManager.save(sandroMessageOne);
        messageManager.save(sandroMessageTwo);
        messageManager.save(kyloMessage);

        let wall = new Wall('Shana', messageManager);
        let spy = sinon.spy(console, 'log');
        wall.display();

        assert(spy.calledWith('Kylo - I wish Rey was on my side... (2 minutes ago)'));
        assert(spy.calledWith('Sandro - I feel like seafood tonight! (3 minutes ago)'));        
        assert(spy.calledWith('Shana - Hello Terminal Talk People! (5 minutes ago)'));
        assert(spy.calledWith('Sandro - Welcome to T_T (8 minutes ago)'));        
        console.log.restore();
    });
});