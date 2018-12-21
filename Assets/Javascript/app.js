
// Create a trivia timed game! Lol
// Create variables needed for game. May need to add more to HTML for this to work 
//All the questions we will ask 
// Questions user got correct
// Questions user got wrong
// Questions user did not answer due to time
// Store user's answer
// Set a timer for 10 seconds at the top that will count down to the user
// User can click start button to see first question and then begin timer
// Have a set of 10 questions that shuffle through in the <div>
// Only show 1 question and it's 4 answers on the page at a time for 30 seconds
// Start timer when new question comes up
// If user gets answer right, display they got it right with a text of correct answer and gif/picture 5 seconds?
// If user gets it wrong, say it was wrong and still show text of correct answer and gif/picture for 5 seconds?
// If user does not answer in given time, show it's out of time with the correct answer and move to next questions.
// Go through all 10 questions
// Keep score of right and wrong choices as well as unanswered ones 
// Display score at the end of the game
// Add a "start over button" that does NOT refresh the page, but just resets the game

// Questions user will answer
var questions

// User got correct
var correct = 0;

// User got wrong
var wrong = 0;

// User didn't answer in the given amount of time
var unanswered

// Log their choice
var userAnswer

// Actual answer to question
var actAnswer

alert("Welcome to trivial trivia!");

// either do it the following way or change the button in html...
// $("#startButton").onClick = function() {start};

var start = function() {

    function questions(text, choices, answer) {

    }   

    var score = function() {
        if (userAnswer === actAnswer) {
            correct++;
        } else {
            wrong++;
        }

    }
}