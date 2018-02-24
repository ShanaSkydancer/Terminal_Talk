'use strict';

const User = require("../src/User.js");
const Message = require("../src/Message.js");
const Timeline = require('../src/Timeline.js');
const Wall = require('../src/Wall.js');
const moment = require('moment');

module.exports = class Command {
    constructor(input, userManager, messageManager) {
        this.username = input.username;
        this.action = input.action;
        this.directObject = input.directObject;
        this.userManager = userManager;
        this.messageManager = messageManager;
    }

    isPostCommand() {
        return this.action === "->";
    }

    isReadCommand() {
        return (! this.action);
    }

    isFollowCommand() {
        return this.action === "follows";
    }

    isWallCommand() {
        return this.action === 'wall';
    }

    execute() {
        if (this.isPostCommand()) {
            if (! this.userManager.findByName(this.username)){
              this.userManager.save(new User(this.username));
            }
            this.messageManager.save(new Message(this.username, this.directObject, moment()));
          }
          if (this.isReadCommand()) {
            let timeline = new Timeline(this.username, this.messageManager);
            timeline.display();
          }
      
          if (this.isFollowCommand()) {
            this.userManager.findByName(this.username).follows(this.directObject);
          }
      
          if (this.isWallCommand()) {
            let wall = new Wall(this.userManager.findByName(this.username), this.messageManager);
            wall.display();
          }
    }
}