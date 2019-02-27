$("#startButton").on("click", function () {
    $("#startButton").hide();
    game.loadQuestion();
})

$(document).on("click", ".answer-button", function (event) {
    game.clicked(event);
})

var question = [{
    question: "Which fighting game has sold the most copies in history?",
    answerChoices: ["Super Smash Bros Brawl", "Mortal Kombat X", "Tekken 5", "Street Fighter 2"],
    actualAnswer: "Super Smash Bros Brawl"
}, {
    question: "What is believed to be the first ever MMORPG?",
    answerChoices: ["Ultima Online", "Everquest", "World of Warcraft", "Meridian 59"],
    actualAnswer: "Meridian 59"
}, {
    question: "You have found yourself in the land of Val Oriyn.... what game are you playing?",
    answerChoices: ["World of Warcraft", "Tera", "Skyrim", "Diablo 3"],
    actualAnswer: "Tera"
}, {
    question: "What is the highest selling console of all time?",
    answerChoices: ["Sony Playstation 2", "Microsoft Xbox 360", "Nintendo DS", "Sega Genesis"],
    actualAnswer: "Sony Playstation 2"
}, {
    question: "Which of these is the best selling game of all time on Xbox One?",
    answerChoices: ["Destiny 2", "Grand Theft Auto 4", "Call of Duty: WWII", "Battlefield 4"],
    actualAnswer: "Call of Duty: WWII"
}, {
    question: "Which of these video game characters never speaks?",
    answerChoices: ["Master Chief", "Mario", "Nathan Drake", "Link"],
    actualAnswer: "Link"
}, {
    question: "Which was the first ever video game console?",
    answerChoices: ["Magnavox Odyssey", "Atari 2600", "Intellivision", "Sega SG-100"],
    actualAnswer: "Magnavox Odyssey"
}, {
    question: "What is the maximum number of supported controllers for the Playstation 3?",
    answerChoices: ["Four", "Six", "Seven", "Ten"],
    actualAnswer: "Seven"
}, {
    question: "What is Megaman's name in Japan?",
    answerChoices: ["Misterman", "Amazingman", "Rockman", "Superman"],
    actualAnswer: "Rockman"
}, {
    question: "Which Esports game had the highest prize pool in 2018?",
    answerChoices: ["Call of Duty", "Dota 2", "League of Legends", "Counter Strike"],
    actualAnswer: "Dota 2"
}, {
    question: "Which iOs mobile game was the highest grossing in December 2018?",
    answerChoices: ["Candy Crush Saga", "Fortnite", "Roblox", "Pokemon Go"],
    actualAnswer: "Pokemon Go"
}];

var game = {
    question: question,
    currentQuestion: 0,
    // currentQuestion: function (question) {
    //     for (var i = 0; i < question.length; i++) {
    //         question[Math.floor(Math.random() * question.length)]}
    // },
    counter: 20,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countdown: function () {
        game.counter--;
        $("#countdown").html(game.counter);
        if (game.counter <= 0) {
            console.log("Time's up!");
            game.timeup();
        }
    },
    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);

        $("#triviaQuestions").html(question[game.currentQuestion].question);

        for (var i = 0; i < question[game.currentQuestion].answerChoices.length; i++) {
            $("#showAnswers").append('<button class="answer-button" id="button-' + i + '" data-name="' + question[game.currentQuestion].answerChoices[i] + '">' + question[game.currentQuestion].answerChoices[i] + '</button');
        }
    },
    nextQuestion: function () {
        game.counter = 20;
        $("#countdown").html(game.counter);
        game.currentQuestion++;
        $("#showAnswers").empty();
        $("#answerCorrect").empty();
        $("#answerIncorrect").empty();
        game.loadQuestion();
    },
    timeUp: function () {

    },
    results: function () {

    },
    clicked: function (event) {
        clearInterval(timer);
        if ($(event.target).data("name") == question[game.currentQuestion].actualAnswer) {
            game.answerCorrectly();
        } else {
            game.answerIncorrectly();
        }
    },
    answerCorrectly: function () {
        console.log("You got it right!");
        clearInterval(timer);
        game.correct++;
        $("#answerCorrect").html("<h2>You got it right!</h2>");

        if (game.currentQuestion == question.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    answerIncorrectly: function () {
        console.log("You got it wrong!");
        clearInterval(timer);
        game.incorrect++;
        $("#answerIncorrect").html("<h2>You got it wrong!</h2>");

        if (game.currentQuestion == question.length - 1) {
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    userUnanswered: function () {

    }
}