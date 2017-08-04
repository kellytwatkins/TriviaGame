var firstQuestion = {
        questionScript: "What was the first full length CGI movie?",
        potentialAnswers: [
            'A Bugs Life',
            'Monsters Inc',
            'Toy Story',
            'The Lion King'],
        correctAnswer: "Toy Story"
    }
var secondQuestion = {
        questionScript: "Which of these is NOT a name of one of the Spice Girls?",
        potentialAnswers: [
            'Sporty Spice',
            'Fred Spice',
            'Scary Spice',
            'Posh Spice'],
        correctAnswer: "Fred Spice"
    }
var thirdQuestion = {
        questionScript: "Which NBA team won the most titles in the 90s?",
        potentialAnswers: [
            'New York Knicks',
            'Portland Trailblazers',
            'Los Angeles Lakers',
            'Chicago Bulls'],
        correctAnswer: "Los Angeles Lakers"
    }
var fourthQuestion = {
        questionScript: "Which group released the hit song, 'Smells Like Teen Spirit'?",
        potentialAnswers: [
            'Nirvana',
            'Backstreet Boys',
            'The Offspring',
            'No Doubt'],
        correctAnswer: "Nirvana"
    }

var questions = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion];

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;


$("#startGame").click(function() {
    
    AddQuestions();
    
});

function AddQuestions() {
    $("#main").html("<div class='questions'>" + firstQuestion.questionScript + "</div>");
    
    for (i = 0; i < firstQuestion.potentialAnswers.length; i++) {
        $("#main").append("<div class='col-md-3'><input type='radio' val='" + i + "'>" + firstQuestion.potentialAnswers[i] + "</div>");
    };
    
    $("#main").append("<br><div class='questions'>" + secondQuestion.questionScript + "</div>");
    
    for (i = 0; i < secondQuestion.potentialAnswers.length; i++) {
        $("#main").append("<div class='col-md-3'><input type='radio' val='" + i + "'>" + secondQuestion.potentialAnswers[i] + "</div>");
    };
    
    $("#main").append("<br><div class='questions'>" + thirdQuestion.questionScript + "</div>");
    
    for (i = 0; i < thirdQuestion.potentialAnswers.length; i++) {
        $("#main").append("<div class='col-md-3'><input type='radio' val='" + i + "'>" + thirdQuestion.potentialAnswers[i] + "</div>");
    };
    
    $("#main").append("<br><div class='questions'>" + fourthQuestion.questionScript + "</div>");
    
    for (i = 0; i < fourthQuestion.potentialAnswers.length; i++) {
        $("#main").append("<div class='col-md-3'><input type='radio' val='" + i + "'>" + fourthQuestion.potentialAnswers[i] + "</div>");
    };
    
    var timerId = setInterval(countdown, 1000);
}


var timeLeft = 30;

function countdown() {        
    if (timeLeft === 0) {
        endPage();
    }
    else {
      $("#timer").html(timeLeft + " seconds remaining")
    timeLeft--;
  }
};


function endPage() {
    $("#timer").empty();
    
    $("#main").html("<p>All Done!</p>");
    $("#main").append("<div>Correct Answers: " + correctAnswers + "</div>")
    $("#main").append("<div>Incorrect Answers: " + incorrectAnswers + "</div>")
    $("#main").append("<div>Unanswered: " + unanswered + "</div>")
};

