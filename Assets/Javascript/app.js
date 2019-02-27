$("#startButton").on("click", function() {
    $("##startButton").hide();
})
    
    var questionCounter = 0;
    
    //Shows user correct answer
    var showTimer;
    
    //Timer to choose an answer
    var answerTime = 20;
    var answerTimer;

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var userAnswer = [];

    var triviaQuestions = [{
        question: "Which fighting game has sold the most copies in history?",
        answerChoices: ["Super Smash Bros Brawl", "Mortal Kombat X", "Tekken 5", "Street Fighter 2"],
        actualAnswer: 0
    },{
        question: "What is believed to be the first ever MMORPG?",
        answerChoices: ["Ultima Online", "Everquest", "World of Warcraft", "Meridian 59"],
        actualAnswer: 3
    },{
        question: "You have found yourself in the land of Val Oriyn.... what game are you playing?",
        answerChoices: ["World of Warcraft", "Tera", "Skyrim", "Diablo 3"],
        actualAnswer: 1
    }, {
        question: "What is the highest selling console of all time?",
        answerChoices: ["Sony Playstation 2", "Microsoft Xbox 360", "Nintendo DS", "Sega Genesis"],
        actualAnswer: 0
    },{
        question: "Which of these is the best selling game of all time on Xbox One?",
        answerChoices: ["Destiny 2", "Grand Theft Auto 4", "Call of Duty: WWII", "Battlefield 4"],
        actualAnswer: 2
    },{
        question: "Which of these video game characters never speaks?",
        answerChoices: ["Master Chief", "Mario", "Nathan Drake", "Link"],
        actualAnswer: 3
    },{
        question: "Which was the first ever video game console?",
        answerChoices: ["Magnavox Odyssey", "Atari 2600", "Intellivision", "Sega SG-100"],
        actualAnswer: 0
    },{
        question: "What is the maximum number of supported controllers for the Playstation 3?",
        answerChoices: ["Four", "Six", "Seven", "Ten"],
        actualAnswer: 2
    },{
        question: "What is Megaman's name in Japan?",
        answerChoices: ["Misterman", "Amazingman", "Rockman", "Superman"],
        actualAnswer: 2
    },{
        question: "Which Esports game had the highest prize pool in 2018?",
        answerChoices: ["Call of Duty", "Dota 2", "League of Legends", "Counter Strike"],
        actualAnswer: 1
    },{
        question: "Which iOs mobile game was the highest grossing in December 2018?",
        answerChoices: ["Candy Crush Saga", "Fortnite", "Roblox", "Pokemon Go"],
        actualAnswer: 3
    }];

    var selectedAnswer;
    var gameTrivia; //same as gameHTML

    function startPage() {
        $("#startButton").click(function (click) {
            $("#beginning").hide();
            $("#startUp").show();
            displayQuestions();
            showChoices();
            answerTimer();
        })
    }

    startPage();

    $("#answerChoices").on("click", ".answer", function(event){
        selectedAnswer = $(this).text();
        if (selectedAnswer === actAnswer[questionCounter]) {
            clearInterval(answerTimer);
            addWin();
        } else {
            clearInterval(answerTimer);
            addLoss();
        }
    });

    $("#resetGame").on("click", "#resetTrivia", function(event) {
        resetGame();
    });

    function displayQuestions() {
        $("#triviaQuestions").html(myQuestions[questionCounter]); 
    }

    function answerTimer() {
        answerTimer = setInterval(twentySeconds, 1000);
        function twentySeconds() {
            if (answerTime === 0) {
                clearInterval(answerTimer);
                answerTimeout();
            }
            if (answerTimer > 0) {
                answerTimer--;
            }
            $("#countdown").html(answerTimer);    
        }
    }

    function showChoices() {
        triviaChoices = "<p class='answer'>1. " + myAnswers[questionCounter][0] + "</p><p class='answer'>2. " + myAnswers[questionCounter][1] + "</p><p class='answer'>3. " + myAnswers[questionCounter][2] + "</p><p class='answer'>4. " + myAnswers[questionCounter][3] + "</p>";
        $("#answerChoices").html(triviaChoices);
        console.log(triviaChoices);
    }

    function addWin() {
        correct++;
        $("#quizSection").html(gameTrivia);
        gameTrivia = "<h3>You guessed correctly! The answer is " + actAnswer[questionCounter] + "!</h3>";
    }

    function addLoss() {
        incorrect++;
        $("#quizSection").html(gameTrivia);
        gameTrivia = "<h3>You guessed incorrectly! The answer is " + actAnswer[questionCounter] + "!</h3>";
    }

    function answerTimeout() {
        unanswered++;
        gameTrivia = "<p>Time is up!</p><p>The correct answer was: " + actAnswer[questionCounter] + "</p>";
        $("#quizSection").html(gameTrivia);
        setTimeout(wait, 5000);
    }

    function lastScreen() {
        $("#quizSection").html(gameTrivia);
        gameTrivia = "<p>You've finished the game! Here's your score</p>" + "<p>Correct Answers: " + correct + "</p>" + "<p>Wrong Answers: " + incorrect + "</p>" + "<p>Unanswered: " + unanswered + "</p>";
        $("#resetTrivia").show();
    }

    function resetGame () {
        questionCounter = 0;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        answerTime = 20;
        displayQuestions();
        answerTimer();
    }














    // Run start page after reset button
    startPage();

})