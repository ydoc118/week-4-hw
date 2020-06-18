//Assignment Code
var startingTime = 10;
var quizQuestions = [
    {
        questionEl: "What is 4-2?",
        answerA: "1",
        answerB: "2",
        answerC: "3",
        answerD: "4"
    },
    {
        questionElTwo: "What is 10-5?",
        answerATwo: "1",
        answerBTwo: "2",
        answerCTwo: "4",
        answerDTwo: "5"
    },
    {
        questionElThree: "What is 2+2",
        answerAThree: "10",
        answerBThree: "12",
        answerCThree: "4",
        answerDThree: "1"
},
 {
      questionElFour: "What's my name?",
        answerAFour: "Cody",
        answerBFour: "Brett",
        answerCFour: "Jake",
        answerDFour: "Max"
    },
    {
        questionElFive: "How old am I?",
        answerAFive: "22",
        answerBFive: "30",
        answerCFive: "18",
        answerDFive: "45"
    }
];
var quizTimer = document.getElementById("timer");
var answerA = document.getElementById("firstAnswer");
var answerB = document.getElementById("secondAnswer");
var answerC = document.getElementById("thirdAnswer");
var answerD = document.getElementById("fourthAnswer");

var answerATwo = document.getElementById("firstAnswerTwo");
var answerBTwo = document.getElementById("secondAnswerTwo");
var answerCTwo = document.getElementById("thirdAnswerTwo");
var answerDTwo = document.getElementById("fourthAnswerTwo");

var answerAThree = document.getElementById("firstAnswerThree");
var answerBThree = document.getElementById("secondAnswerThree");
var answerCThree = document.getElementById("thirdAnswerThree");
var answerDThree = document.getElementById("fourthAnswerThree");

var answerAFour = document.getElementById("firstAnswerFour");
var answerBFour = document.getElementById("secondAnswerFour");
var answerCFour = document.getElementById("thirdAnswerFour");
var answerDFour = document.getElementById("fourthAnswerFour");

var answerAFive = document.getElementById("firstAnswerFive");
var answerBFive = document.getElementById("secondAnswerFive");
var answerCFive = document.getElementById("thirdAnswerFive");
var answerDFive = document.getElementById("fourthAnswerFive");

var questionEl = document.getElementById("questionItem");
var questionElTwo = document.getElementById("questionItemTwo");
var questionElThree = document.getElementById("questionItemThree");
var questionElFour = document.getElementById("questionItemFour");
var questionElFive = document.getElementById("questionItemFive");

var answerList = document.querySelector(".list-group");
var answerListTwo = document.querySelector(".secondList");
var answerListThree = document.querySelector(".thirdList");
var answerListFour = document.querySelector(".fourthList");
var answerListFive = document.querySelector(".fifthList");

var lastQuestionEl = quizQuestions.length - 1;
var currentQuestion = 0;

console.log(quizQuestions);

//Display elements
document.getElementById("timer").textContent = "Time Left: " + startingTime;
    
document.getElementById("quizStart").style.display = "None";
document.getElementById("secondQuestion").style.display = "None";
document.getElementById("thirdQuestion").style.display = "None";
document.getElementById("fourthQuestion").style.display = "None";
document.getElementById("fifthQuestion").style.display = "None";

//Timer function
function timerStart() {
    var timerInterval = setInterval(function() {
        startingTime--;
        quizTimer.textContent = "Time Left: " + startingTime;

        if(startingTime === 0) {
            clearInterval(timerInterval);
            alert("Time's Up!");
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
                alert("Correct!");
                currentQuestion++
                secondQuestion();
            }
            else {
                alert("Incorrect!");
                currentQuestion++
                startingTime = startingTime - 5;
                secondQuestion();
            }
        })
        
    }

    

    function secondQuestion() {
        document.getElementById("quizStart").style.display = "none";
        document.getElementById("secondQuestion").style.display = "inherit";
        var q = quizQuestions[currentQuestion];

        questionElTwo.innerHTML = q.questionElTwo;
        answerATwo.innerHTML = q.answerATwo;
        answerBTwo.innerHTML = q.answerBTwo;
        answerCTwo.innerHTML = q.answerCTwo;
        answerDTwo.innerHTML = q.answerDTwo;

        answerListTwo.addEventListener("click", function(event) {
            if (event.target.matches("#fourthAnswerTwo")) {
                alert("Correct!")
                currentQuestion++
                thirdQuestion();
            }
            else {
                alert("Incorrect!");
                currentQuestion++
                startingTime = startingTime - 5;
                ThirdQuestion();
            }
        })
    }


    function thirdQuestion() {

        document.getElementById("secondQuestion").style.display = "none";
        document.getElementById("thirdQuestion").style.display = "inherit";
        var q = quizQuestions[currentQuestion];

        questionElThree.innerHTML = q.questionElThree;
        answerAThree.innerHTML = q.answerAThree;
        answerBThree.innerHTML = q.answerBThree;
        answerCThree.innerHTML = q.answerCThree;
        answerDThree.innerHTML = q.answerDThree;

        answerListThree.addEventListener("click", function(event) {
            if (event.target.matches("#thirdAnswerThree")) {
                alert("Correct!");
                currentQuestion++
                fourthQuestion();
            }
            else {
                alert("Incorrect!");
                currentQuestion++
                startingTime = startingTime - 5;
                fourthQuestion();
            }
        })
        
    }


    function fourthQuestion() {
        document.getElementById("thirdQuestion").style.display = "none";
        document.getElementById("fourthQuestion").style.display = "inherit";
        var q = quizQuestions[currentQuestion];

        questionElFour.innerHTML = q.questionElFour;
        answerAFour.innerHTML = q.answerAFour;
        answerBFour.innerHTML = q.answerBFour;
        answerCFour.innerHTML = q.answerCFour;
        answerDFour.innerHTML = q.answerDFour;

        answerListFour.addEventListener("click", function(event) {
            if (event.target.matches("#firstAnswerFour")) {
                alert("Correct!");
                currentQuestion++
                fifthQuestion();
            }
            else {
                alert("Incorrect!");
                currentQuestion++
                startingTime = startingTime - 5;
                fifthQuestion();
            }
        })
        
    }


    function fifthQuestion() {
        document.getElementById("fourthQuestion").style.display = "none";
        document.getElementById("fifthQuestion").style.display = "inherit";
        var q = quizQuestions[currentQuestion];

        questionElFive.innerHTML = q.questionElFive;
        answerAFive.innerHTML = q.answerAFive;
        answerBFive.innerHTML = q.answerBFive;
        answerCFive.innerHTML = q.answerCFive;
        answerDFive.innerHTML = q.answerDFive;

        answerListFive.addEventListener("click", function(event) {
            if (event.target.matches("#secondAnswerFive")) {
                alert("Correct!");
            }
            else {
                alert("Incorrect!");
            }
        })
        
    }

    function quizEnd() {

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
