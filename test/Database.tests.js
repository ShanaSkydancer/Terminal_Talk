'use strict';

const Database = require('../src/Database.js');
const User = require('../src/User.js');
const assert = require('assert');

describe('the Database Class', function() {
    it(`should save two Users`, function() {
        let userOne = new User('Shana');
        let userTwo = new User('Skye');
        let database = new Database();
        database.saveUser(userOne);
        database.saveUser(userTwo);

        assert.deepEqual(database.getAllUsers(), [userOne, userTwo]);
    });
});