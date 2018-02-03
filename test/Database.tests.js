'use strict';

const assert = require('assert');

describe('the Database Class', function() {
    it(`should save two Users`, function() {
        let userOne = new User('Shana');
        let userTwo = new User('Skye');
        let database = new Database();
        database.save(userOne);
        database.save(userTwo);

        assert.deepEqual(database.getAllUsers(), [userOne, userTwo]);
    });
});