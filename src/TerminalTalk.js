'use strict';

const Database = require('../src/Database.js');
const UserManager = require('../src/UserManager.js');
const MessageManager = require('../src/MessageManager.js');
const InputParser = require('../src/InputParser.js');
const Command = require('../src/Command.js');
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
    let parsedInput = new InputParser().parse(input);
    let command = new Command(parsedInput, this.userManager, this.messageManager);
    command.execute();
  }

  start() {
    this.initialisePrompt();
  }

  initialisePrompt() {
    this.prompt.question('Enter your command:', (input) => {
      if (input === 'exit') {
        console.log('Thanks for using Terminal Talk! Come back soon! :) ');
        return this.prompt.close();
      }

      this.handleInput(input);
      this.initialisePrompt();
    })
  }
}
