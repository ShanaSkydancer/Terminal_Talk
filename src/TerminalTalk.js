'use strict';

const Database = require('../src/Database.js')
const UserManager = require('../src/UserManager.js')
const MessageManager = require('../src/MessageManager.js')
const User = require("../src/User.js");
const Message = require("../src/Message.js");
const Timeline = require('../src/Timeline.js')
const Wall = require('../src/Wall.js');
const moment = require('moment');
const readline = require('readline');

module.exports = class TerminalTalk {
  constructor(userManager, messageManager) {
    this.userManager = userManager;
    this.messageManager = messageManager;
    this.prompt = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
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
    if (! action) {
      let timeline = new Timeline(username, this.messageManager);
      timeline.display();
    }

    if (action === "follows") {
      this.userManager.findByName(username).follows(directObject);
    }

    if (action === 'wall') {
      let wall = new Wall(this.userManager.findByName(username), this.messageManager);
      wall.display();
    }
  }

  start() {
    this.initialisePrompt();
  }

  initialisePrompt() {
    this.prompt.question('Enter your command:', (input) => {
      if (input === 'exit') {
        console.log('Thanks for using Terminal Talk! Come back soon! :) ');
        return prompt.close();
      }

      this.handleInput(input);
      this.initialisePrompt();
    })


  }
}
