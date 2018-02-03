var inquirer = require('inquirer');

var Word = require('./word.js');

var possibleWords = ["Denver", "Boulder", "Fort Collins", "Colorado Springs", "Aspen", "Aurora", "Grand Junction", "Pueblo", "Vail", "Durango", "Estes Park", "Lakewood", "Loveland", "Golden", "Centennial", "Castle Rock"];
var randomWord = possibleWords[Math.floor(Math.random()* possibleWords.length)];

var unknownword = new Word(randomWord);



var question = [{
    name: "question1",
    message: "Guess a letter!"

}];

var incorrectGuesses = 6;

var alreadyGuessed = [];

function guess(){
    inquirer.prompt(question).then(answers => {
        if(unknownword.testchar(answers.question1)){
            //correct guess
            console.log("You got one!");
        }
        else{
            //incorrect guess
            if(alreadyGuessed.includes(answers.question1)){
                console.log("You already guessed that letter!")
            }
            else{
                alreadyGuessed.push(answers.question1);
                    console.log("Wrong!");
            }
            incorrectGuesses--;
                console.log(incorrectGuesses + " wrong guesses remaining.")
            if(incorrectGuesses <= 0){
                console.log("YOU LOSE!")
                    return;
            }

        }

        console.log(unknownword.getstr());
        if(!unknownword.isfound()){
            //game is not over
            guess();
        }

        else{
            //game over
            console.log("YOU WIN!!")
        }

          
    });
}

guess();
