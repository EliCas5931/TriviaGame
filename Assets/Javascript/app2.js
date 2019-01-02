$(document).ready(function () {
    var questionCounter = 0;

    var answerTime = 5000;

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var userAnswer = [];

    var myQuestions = [
        {
            question: "Which fighting game has sold the most copies in history?",
            choices: ["Super Smash Bros Brawl", "Mortal Kombat X", "Tekken 5", "Street Fighter 2"],
            actAnswer: 0
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


    function startPage() {
        $("#startButton").click(function (click) {
            
            $("p").hide();
            $("h1").hide();
            $("#startButton").hide();
            $("#startUp").show();
            firstQuestion();
            //Cancel default action 
            click.preventDefault();
        })
    }

    function firstQuestion() {
        var triviaQuestions = $("#triviaQuestions");
        triviaQuestions.empty();
        displayQuestions();
    }

    function displayQuestions() {
        $("#triviaQuestions").html(myQuestions[questionCounter].question);
        showChoices();
        // clearQuestions();
        // resetTimer();
        //runTimer();
        //submitAnswer();
    }

    function showChoices() {
        var responseChoices = $("#answerChoices");
        // User's choices
        responseChoices.empty();
        for (var i = 0; i < myQuestions[questionCounter].choices.length; i++) {
            responseChoices.append('<button>' + [i] +'"><div class="twd-opt">' + questions[questionCounter].choices[i] + '</div></input><br></label>');
            //var choices = 
            // Mine does not work
            //responseChoices.append('<label><input value="' + [i] + '"><div>' + questions[questionCounter].choices[i] + '</div</input></label>');
           // console.log(myQuestions.choices);

        };
    }
















    // Run start page after reset button
    startPage();

})