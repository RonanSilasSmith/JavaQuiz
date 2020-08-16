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
var time = 0;
var questionNo = 0;

var runQuiz = function(){
    questionNo = 0;
    document.getElementById("questions").style.display = "block";
    document.getElementById("openPage").style.display = "none";

    setQuestions();
}

var setQuestions = function(){
    document.getElementById("quizHeader").innerHTML = (quizInfo[questionNo].question);
    document.getElementById("0").innerHTML = (quizInfo[questionNo].answers[0]);
    document.getElementById("1").innerHTML = (quizInfo[questionNo].answers[1]);
    document.getElementById("2").innerHTML = (quizInfo[questionNo].answers[2]);
    document.getElementById("3").innerHTML = (quizInfo[questionNo].answers[3]);
}

var checkAnswer = function(check){
    if(quizInfo[questionNo].correct===check){
        time += 3;
        questionNo++;
        if(questionNo >= quizInfo.length){
            youWin();
        }
        else{
            setQuestions();
            //you win alert
        }

    }else{
        time -= 3;
        //you lose alert
    }
}

var clear = function(){
    document.getElementById("questions").style.display = "none";
    document.getElementById("enterScore").style.display = "none";
    document.getElementById("openPage").style.display = "none";
    document.getElementById("highscores").style.display = "none";
}

var youWin = function(){
    clear();
    document.getElementById("enterScore").style.display = "block";
}


var reset = function(){
    clear();
    document.getElementById("openPage").style.display = "block";
}

var highscores = function(){
    clear();
    document.getElementById("highscores").style.display = "block";
}

var clearScore = function(){
    
}