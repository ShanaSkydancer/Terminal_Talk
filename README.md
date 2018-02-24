# Welcome to Terminal_Talk!
--------------------------------

### Table of Contents:
***
* [About the app](#about-the-app)
* [How to use the app](#how-to-use-the-app)
* [How to get the app](#how-to-get-the-app)
* [Installation Guide](#installation)
* [Running Tests](#running-tests)


## About the app
***
This project is a console-based social networking application similar to Twitter

## User Section
---------------

## How to use the app
***
1. Posting:
    * To post something input a name and a message in this format:
    * "`<user name> -> <message>`"
    * eg  "Shana -> I love Terminal Talk"
    * Add as many names and messages as you'd like

3. Reading:
    * To read someone's timeline, enter their name.
    * "`<user name>`"
    * eg  "Shana"

4. Following:
    * To view other user's posts you need to use the follows command.
    * "`<user name> follows <user name>`"
    * eg  "Shana follows Skye"

5. Wall:
    * To view a user's wall, just enter their name and the wall command.
    * "`<user name> wall`"
    * eg  "Shana wall"

## Developers Section
---------------------

## How to get the app
***

### The following must be installed before any further steps
***

1. [NPM](https://www.npmjs.com/)
2. [Node](https://nodejs.org/en/) "v8.4.0"
3. [Mocha](https://mochajs.org/)

## Installation
***

1. Fork and clone the repository from Github

2. Go to the root folder on your computer/laptop that you've just cloned, and run "`npm install`"
	* This is going to download all the dependencies that you'll need because they were listed in the projects package.json file.

3. Now you can run "`npm run terminal_talk`" to start the app in the terminal.

## Running Tests
***

All tests can be accessed within the 'test' folder of this project.

We will be running test with:
* Mocha

### Mocha
***

To run mocha use

"`mocha`"

### Future Plans
-----------

In the future I plan to:

1. Have my code cleaner and more refactored
2. Have the program be able to deal with exceptions or invalid commands
3. Make use of a database like MongoDB
4. Write even more tests
5. Implement Travis CI - I attempted to do this however it didn't work successfully. I think the problem is happening with it and Mocha.

### Creator
-----------

Terminal_Talk was created by Charné Banger

[Github](https://github.com/ShanaSkydancer)

[Twitter](https://twitter.com/Shana_Skydancer)

[Stackoverflow](https://stackoverflow.com/users/7557788/shanaskydancer)
