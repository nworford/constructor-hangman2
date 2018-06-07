constructor-hangman



ABOUT Constructor Hangman:

Constructor Hangman was an Advanced JavaScript homework assignment. Instructions were as follows:

The completed game should meet the following criteria:

	1.The completed game should be able to receive user input using the inquirer or prompt npm packages.

	2.Feel free to use as many different types of constructor functions as you are able to, but at a minimum, you must create the 	following constructor functions:

-Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

-Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.


1.You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.

2.Each constructor function should be in it's own file and be exported and required wherever needed.

3.Look into function prototypes and use them for a few of your constructor's methods.


Notes

	-Since this assignment is a command-line application, you don't need to deploy it anywhere. You will, however, be required to upload 	it to Github.

	-Remember to include a package.json file containing your project dependencies in your Github repo!
T
ECH USED: Node.js

HIGHLIGHT CODE:

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



CONCLUSION: 
	In completing this assignment, I got an introduction into how to use Node.js to create a game. 

GRADE: A

INSTRUCTOR COMMENT:

from David Hammond 
February 8th, 3:35 pm

First off fantastic job making sure your node modules are not getting pushed up and are simply listed as a dependency for your project. On top of that hats off for tackling using classes vs standard constructors. ES6 is here and it is really good to see you getting comfortable with that. Everything functioning as expected. My critiques are small, mainly related to validation. It was great to see validation on pressing the same letter multiple times, but numbers were allowed. Interestingly enough more than one character is allowed as well. Something to start cranking through your brain as you begin to more and more familiar with developing software is to try and think of all cases that could possibly happen and handle them. Sometimes this sounds foolish but remember the end user will always break your app if it si possible, it just works out that way. Fantastic effort!

FUTURE DEVELOPMENT:
