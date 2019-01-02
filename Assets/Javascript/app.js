
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

$(document).ready(function () {

// Questions user will answer
var myQuestions = [{
    question: "Which fighting game has sold the most copies in history?",
    choices: ["Super Smash Bros Brawl", "Mortal Kombat X", "Tekken 5", "Street Fighter 2"],
    actAnswer: 0
},
{
    question: "Which is the highest grossing video game franchise?",
    choices: ["Grand Theft Auto", "Mario", "Pokemon", "Call of Duty"],
    actAnswer: 1
},
{
    question: "What is believed to be the first ever MMORPG?",
    choices: ["Ultima Online", "Everquest", "World of Warcraft", "Meridian 59"],
    actAnswer: 3
},
{
    question: "You have found yourself in the land of Val Oriyn.... what game are you playing?",
    choices: ["World of Warcraft", "Tera", "Skyrim", "Diablo 3"],
    actAnswer: 1
},
{
    question: "What is the highest selling console of all time?",
    choices: ["Sony's PlayStation 2", "Microsoft's Xbox 360", "Nintendo's DS", "Sega Genesis"],
    actAnswer: 0
},
{
    question: "Which of these is the best selling game of all time on Xbox One?",
    choices: ["Destiny 2", "Grand Theft Auto 4", "Call of Duty: WWII", "Battlefield 4"],
    actAnswer: 2
},
{
    question: "Which of these video game characters never speaks?",
    choices: ["Master Chief", "Mario", "Nathan Drake", "Link"],
    actAnswer: 3
},
{
    question: "Which was the first ever video game console?",
    choices: ["Magnavox Odyssey", "Atari 2600", "Intellivision", "Sega SG-100"],
    actAnswer: 0
},
{
    quesiton: "What is the maximum number of supported controllers for the Playstation 3?",
    choices: ["Four", "Six", "Seven", "Ten"],
    actAnswer: 2
},
{
    question: "What is Megaman's name in Japan?",
    choices: ["Misterman", "Amazingman", "Rockman", "Superman"],
    actAnswer: 2
}
];

var questionCounter = 0;

var showAnswers = 5000;

// User score
var correct = 0;
var wrong = 0;
var unanswered = 0;

var userAnswer = [];

var actAnswer

var time = 21
var timer;

var answerTime = 20;

var answerTimer;

var startTrivia;

alert("Welcome to trivial trivia!");



    $("#startUp").hide();

    // either do it the following way or change the button in html...
    // $("#startButton").onClick = function() {start};
    $("#startButton").click(function () {
        $("p").hide();
        $("h1").hide();
        $("#startButton").hide();
        $("#startUp").show();
        startTrivia();
    });


function submitAnswer() {
    $("").on("click", )
}

    var startTrivia = function () {

        $(".buttons").empty();

        for (var i = 0; i < 10; i++) {

            var questionCount = $(myQuestions).length;

            questionOrder = [];

            while (questionOrder.length < questionCount) {
                var random = Math.floor(Math.random() * questionCount);
                if (questionOrder.indexOf(random) === -1) questionOrder.push(random);
                questionAsked = 0;
                hideAllEx(questionOrder[questionAsked]);
            }

            for (var i = 0; i < 4; i++) {
            var options = $("<button>");
            options.attr({
                "id": 'button' + i,
            });
            $(".buttons").append(options);
        }
    }

    }

    function hideAllEx(question) {
        for (var i = 0; i < myQuestions.length; i++) {
            var question = myQuestions[i].question;
            console.log(question);
            var choices = myQuestions[i].choices;
            console.log(choices);
        }

    }




    function run() {
        clearInterval(timer);
        timer = setInterval(decrease, 1000);
    }

    function decrease() {
        time--;
        $("#countdown").html("<h3>You have " + time + " seconds left!</h3>");
        if (time === 0) {
            stop();
        }
    }

    function stop() {
        clearInterval(timer);
    }

    run();
}



    // Countdown timer to answer question





    // Show answers page
    //function showAnswers() {
    //  answerTimer = setInterval(function () {
    //    answerTime--;
    //  $("#").html("<h2>The correct answer is " + actAnswer + "!</h2>");
    //}, 1000)

    //if (answerTime === 0) {
    //  timer();
    //}


    //var score = function () {
   // if (userAnswer === actAnswer) {
    //    correct++;
  //  } else {
   //     wrong++;
   // }

//}


//})


// function myQuestions(question, choices, actAnswer) {
    //this.question = question;
    //this.choices = choices;
    //this.actAnswer = actAnswer;
//}

//function setupTrivia() {
  //$('#triviaQuestions').html(parseInt(currentQuestion) + 1 + " . " + myQuestions[currentQuestion].question);
   //console.log(currentQuestion);
//}





//var start = function() {

  //  function questions(text, choices, answer) {

    // 
