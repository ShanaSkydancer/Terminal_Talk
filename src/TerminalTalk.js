'use strict';

const Database = require('../src/Database.js')
const UserManager = require('../src/UserManager.js')
const MessageManager = require('../src/MessageManager.js')
const User = require("../src/User.js");
const Message = require("../src/Message.js");
const moment = require('moment');

module.exports = class TerminalTalk {
  constructor(userManager, messageManager) {
    this.userManager = userManager;
    this.messageManager = messageManager;
  }

  handleInput(input) {
    let inputAsArray = input.split(' ');
    let username = inputAsArray[0];
    let action = inputAsArray[1];
    let directObject = inputAsArray.slice(2).join(" ");

    if (action === "->") {
      if (! this.userManager.findByName(username)){
        this.userManager.save(new User(username));
      }
      this.messageManager.save(new Message(username, directObject, moment()));
    }
  }

}
