//Assignment Code
var startingTime = 60;
var quizQuestions = [
    {
        questionEl: "What is 4-2?",
        answerA: "1",
        answerB: "2",
        answerC: "3",
        answerD: "4",
        correct: answerB
    },
    {
        questionEl: "What is 10-5?",
        answerA: "1",
        answerB: "2",
        answerC: "4",
        answerD: "5",
    }
];
var quizTimer = document.getElementById("timer");
var answerA = document.getElementById("firstAnswer");
var answerB = document.getElementById("secondAnswer");
var answerC = document.getElementById("thirdAnswer");
var answerD = document.getElementById("fourthAnswer");
var questionEl = document.getElementById("questionItem");
var answerList = document.querySelector(".list-group")
var lastQuestionEl = quizQuestions.length - 1;
var currentQuestion = 0;

console.log(quizQuestions);

//Display elements
document.getElementById("timer").textContent = "Time Left: " + startingTime;
    
document.getElementById("quizStart").style.display = "None";

//Timer function
function timerStart() {
    var timerInterval = setInterval(function() {
        startingTime--;
        quizTimer.textContent = "Time Left: " + startingTime;

        if(startingTime === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);

}

//Starting the quiz
document.getElementById("startButton").onclick = function() {
    timerStart();

    document.getElementById("startPage").style.display = "none";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("quizStart").style.display = "inherit";
    firstQuestion();

    function firstQuestion() {
        var q = quizQuestions[currentQuestion];

        questionEl.innerHTML = q.questionEl;
        answerA.innerHTML = q.answerA;
        answerB.innerHTML = q.answerB;
        answerC.innerHTML = q.answerC;
        answerD.innerHTML = q.answerD;

        answerList.addEventListener("click", function(event) {
            if (event.target.matches("#secondAnswer")) {
                console.log("correct");
                currentQuestion++
                secondQuestion();
            }
        })
        
    }

    

    function secondQuestion() {
        var q = quizQuestions[currentQuestion];

        questionEl.innerHTML = q.questionEl;
        answerA.innerHTML = q.answerA;
        answerB.innerHTML = q.answerB;
        answerC.innerHTML = q.answerC;
        answerD.innerHTML = q.answerD;

        answerList.addEventListener("click", function(event) {
            if (event.target.matches("#fourthAnswer")) {
                console.log("correct")
            }
        })
    }

    


















   /* function firstQuestion() {
        questionEl.textContent = quizQuestions[0].question;
        answerA.textContent = quizQuestions[0].answers[0].a;
        answerB.textContent = quizQuestions[0].answers[1].b;
        answerC.textContent = quizQuestions[0].answers[2].c;
        answerD.textContent = quizQuestions[0].answers[3].d;

        document.getElementById("firstAnswer").addEventListener("click", function() {
            correctFirst = false;
            console.log("False");
            secondQuestion();
        })

        document.getElementById("secondAnswer").addEventListener("click", function() {
            correctFirst = true;
            console.log("true");
            secondQuestion();
        })

        document.getElementById("thirdAnswer").addEventListener("click", function() {
            correctFirst = false;
            console.log("False");
            secondQuestion();
        })

        document.getElementById("fourthAnswer").addEventListener("click", function() {
            correctFirst = false;
            console.log("False");
            secondQuestion();
        })
    }

    function secondQuestion() {

        questionEl.textContent = quizQuestions[1].question;
        answerA.textContent = quizQuestions[1].answers[0].a;
        answerB.textContent = quizQuestions[1].answers[1].b;
        answerC.textContent = quizQuestions[1].answers[2].c;
        answerD.textContent = quizQuestions[1].answers[3].d;

        document.getElementById("firstAnswer").addEventListener("click", function() {
            correctSecond = false;
            console.log("False");
        })

        document.getElementById("secondAnswer").addEventListener("click", function() {
            correctSecond = false;
            console.log("false");
        })

        document.getElementById("thirdAnswer").addEventListener("click", function() {
            correctSecond = false;
            console.log("False");
        })

        document.getElementById("fourthAnswer").addEventListener("click", function() {
            correctSecond = true;
            console.log("true");
        })
    }*/
}
