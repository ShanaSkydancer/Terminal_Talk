'use strict';

const TerminalTalk = require("../src/TerminalTalk");
const Database = require('../src/Database.js');
const UserManager = require('../src/UserManager.js');
const MessageManager = require('../src/MessageManager.js');

//Welcome to Terminal_Talk

let database = new Database();
let userManager = new UserManager(database);
let messageManager = new MessageManager(database);

let terminalTalk = new TerminalTalk(userManager, messageManager);

console.log(`info here`);

terminalTalk.start();