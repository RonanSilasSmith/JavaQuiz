var quizInfo = [
    {
        question: "HTML, CSS, and ______ are the three keys to website design",
        answers: ["Javascript", "Java", "C++", "HTML again"],
        correct: 0,
        pointValue: 3
    },
    {
        question: "what follows java in JavaScript?",
        answers: ["Script", "#", "++", "nothing"],
        correct: 0,
        pointValue: 3
    },
    {
        question: "Javascript is primarily used in ___",
        answers: ["stylesheets", "who knows", "txt files", "js files"],
        correct: 3,
        pointValue: 3
    },
    {
        question: "this is a freeby?",
        answers: ["pick this", "no", "no", "no"],
        correct: 0,
        pointValue: 3
    }
]
var time = 75;
var questionNo = 0;
var gamewon = false;


var runQuiz = function(){
    questionNo = 0;
    document.getElementById("questions").style.display = "block";
    document.getElementById("openPage").style.display = "none";
    time = 75;
    gamewon = false;
    setQuestions();


        var timer = document.getElementById('time');

        function incrementSeconds() {
            time -= 1;
            timer.innerText = "You have " + time + " left.";
            if(gamewon){
                return;
            }
        }

        var cancel = setInterval(incrementSeconds, 1000);
}

var timer = function(){
    time --;
    document.getElementById("time").innerHTML = 'time left ' + time;
    if(gamewon){
        return time;
    }
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
            gamewon = true;
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
    document.getElementById("scoredisplay").innerHTML = "your score is: ";
}

var youWin = function(){
    clear();

    document.getElementById("enterScore").style.display = "block";
    document.getElementById("scoredisplay").innerHTML += time;
}


var reset = function(){
    clear();
    document.getElementById("openPage").style.display = "block";
}

var highscores = function(){
    clear();
    document.getElementById("highscores").style.display = "block";
    if(localStorage.getItem("user") === null|| localStorage.getItem("highscore")===null){
        document.getElementById("highscore").style.display = "none";
    }else{
        document.getElementById("highscore").innerHTML = "current highscore: " + localStorage.getItem("user") +" has " + localStorage.getItem("highscore") + " points!"; 
        document.getElementById("highscore").style.display = "block";
    }
    
}

var clearScore = function(){
    localStorage.clear();
    document.getElementById("highscore").style.display = "none";
}

var submitHS = function(){
    user = document.getElementById("name").value;
    var highscore = localStorage.getItem("highscore");
    if(highscore !== null){
        if (time > highscore) {
            localStorage.setItem("highscore", time);
            localStorage.setItem("user", user)
        }
    }
    else{
        localStorage.setItem("highscore", time);
        localStorage.setItem("user", user);
    }
    highscores();
}