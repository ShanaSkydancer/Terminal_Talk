'use strict';

const TerminalTalk = require("../src/TerminalTalk.js");
const Database = require('../src/Database.js');
const UserManager = require('../src/UserManager.js');
const MessageManager = require('../src/MessageManager.js');

//Welcome to Terminal_Talk

let database = new Database();
let userManager = new UserManager(database);
let messageManager = new MessageManager(database);

let terminalTalk = new TerminalTalk(userManager, messageManager);

console.log(`
**************************************************************************
       _____                   _             _   _____     _ _    
      |_   _|__ _ __ _ __ ___ (_)_ __   __ _| | |_   _|_ _| | | __
        | |/ _ \ '__| '_ ' _ \| | '_ \ / _' | |   | |/ _' | | |/ /
        | |  __/ |  | | | | | | | | | | (_| | |   | | (_| | |   < 
        |_|\___|_|  |_| |_| |_|_|_| |_|\__,_|_|   |_|\__,_|_|_|\_\
                                                                                                                                
**************************************************************************

Welcome to Terminal Talk - the best social media app for your terminal!

Here are a few tips to help you get started:

1. To post something simply input your name and your message in this format:
        <user name> -> <message>
    eg  "Shana -> I love Terminal Talk"

2. With Terminal Talk you can even be more than one person! Feel free to
add another name and message. Just remember the format!
        <user name> -> <message>
    eg  "Skye -> This is my first T_T post!"

3. You can read someone's timeline by simply entering their name.
        <user name>
    eg  "Shana"

4. Don't forget to follow your friends to be able to see their posts!
        <user name> follows <user name>
    eg  Shana follows Skye

5. You can view anyone's wall, just enter their name and the wall command.
        <user name> wall
    eg  Shana wall

-------------------------------------------------------------------------------

To exit Terminal Talk just type "exit".

`);

terminalTalk.start();