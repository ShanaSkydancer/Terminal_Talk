'use strict';

const Database = require('../src/Database.js');
const User = require('../src/User.js');
const UserManager = require('../src/UserManager.js');
const assert = require('assert');

describe('the Database Class', () => {
    it(`should save two Users`, () => {
        let userOne = new User('Shana');
        let userTwo = new User('Skye');
        let database = new Database();
        let userManager = new UserManager(database);
        
        userManager.save(userOne);
        userManager.save(userTwo);

        assert.deepEqual(userManager.getAll(), [userOne, userTwo]);
    });

    it(`should find a User`, () => {
        let userOne = new User('Shana');
        let userTwo = new User('Skye');
        let database = new Database();
        let userManager = new UserManager(database);

        userManager.save(userOne);
        userManager.save(userTwo);

        assert.deepEqual(userManager.findByName('Shana'), userOne)
    })
});