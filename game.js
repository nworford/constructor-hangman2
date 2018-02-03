var inquirer = require('inquirer');
var Letter = require('./letter.js');
var Word = require('./word.js');

var question = [{
    name: "question1",
    message: "Guess a letter!"
}]

inquirer.prompt(question).then(answers => {
    console.log(answers.question1);
})

var unknownword = new Word("Colorado");

console.log(unknownword.getstr());
