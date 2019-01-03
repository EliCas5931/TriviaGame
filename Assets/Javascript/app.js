$(document).ready(function () {
    $("#resetTrivia").hide();
    
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

    var myQuestions = [
        "Which fighting game has sold the most copies in history?",
        "What is believed to be the first ever MMORPG?",
        "You have found yourself in the land of Val Oriyn.... what game are you playing?",
        "What is the highest selling console of all time?",
        "Which of these is the best selling game of all time on Xbox One?",
        "Which of these video game characters never speaks?",
        "Which was the first ever video game console?",
        "What is the maximum number of supported controllers for the Playstation 3?",
        "What is Megaman's name in Japan?"
    ];
    var myAnswers = [
        ["Super Smash Bros Brawl", "Mortal Kombat X", "Tekken 5", "Street Fighter 2"],
        ["Ultima Online", "Everquest", "World of Warcraft", "Meridian 59"],
        ["World of Warcraft", "Tera", "Skyrim", "Diablo 3"],
        ["Sony Playstation 2", "Microsoft Xbox 360", "Nintendo DS", "Sega Genesis"],
        ["Destiny 2", "Grand Theft Auto 4", "Call of Duty: WWII", "Battlefield 4"],
        ["Master Chief", "Mario", "Nathan Drake", "Link"],
        ["Magnavox Odyssey", "Atari 2600", "Intellivision", "Sega SG-100"],
        ["Four", "Six", "Seven", "Ten"],
        ["Misterman", "Amazingman", "Rockman", "Superman"],
    ];
    var actAnswer = [
        "Super Smash Bros Brawl",
        "Meridian 59",
        "Tera",
        "Sony PlayStation 2",
        "Call of Duty: WWII",
        "Link",
        "Magnavox Odyssey",
        "Seven",
        "Rockman"
    ];
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