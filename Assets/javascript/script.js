var quizInfo = [
    {
        question: "You know what they say about leaves in the fall?",
        answers: ["I do", "I don't", "it's not serious", "gamers won't survive them"],
        correct: 0,
        pointValue: 3
    },
    {
        question: "question 2",
        answers: ["1", "right one", "epoch", "isit them"],
        correct: 1,
        pointValue: 3
    },
    {
        question: "You know what they say?",
        answers: ["no", "I don't", "three", "correct"],
        correct: 3,
        pointValue: 3
    },
    {
        question: "You know what they say about leaves in the fall?",
        answers: ["I do", "I don't", "it's not serious", "gamers won't survive them"],
        correct: 0,
        pointValue: 3
    }
]
var pointTotal = 0;


var runQuiz = function(question){
    for(i = 0; i < question.length; i++){
        var answer = prompt(question[i].question + " answers are: " + question[i].answers);
        if(question[i].answers[question[i].correct] === answer){
            alert("correct");
            pointTotal = addPoints(pointTotal, question[i].pointValue);
        }else{
            alert("false");
        }
    }
    alert("Quiz Over! you have " + pointTotal + " points!");
    saveScore();
}

var saveScore = function(){
    alert("score saved");
}

var addPoints = function(points, pointsAwarded){
    points += pointsAwarded;
    return points;
}

runQuiz(quizInfo);