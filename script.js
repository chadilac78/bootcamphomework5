//ELEMENT ID'S FROM HTML
var startButton = document.getElementById("start-button");
var highButton = document.getElementById("high-scores");
var nextButton = document.getElementById("next-button");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById('question');
var answerButtonElement = document.getElementById("answer-buttons");
var result = document.getElementById("result");
var score = document.getElementById("score");
var startQuiz = document.getElementById("h3");
var points = 0;
var localStorageName = "Chads-Quiz-Game";
var timeEl = document.getElementById('timer');
var secondsLeft = 10;

//alert to start game with instructions
alert("CLICK START TO BEGIN GAME, THERE ARE 9 QUESTIONS, IF YOU GET AN ANSWER CORRECT WE ADD 5 SECONDS TO YOUR TIME AND YOU GET 5 POINTS, IF YOU GET AN ANSWER WRONG WE SUBTRACT 5 SECONDS AND SUBTRACT 5 POINTS,  ANSWER ALL 9 QUESTIONS TO SEE WHERE YOU STACK UP, GAME IS OVER WHEN ALL QUESTIONS HAVE BEEN ANSWERED OR TIME IS UP!!");

//set timer, ends game when time is up or all questions have been answered
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " until your game is over!!";

    if (secondsLeft <= 0) {
      timeEl.classList.add('hide');
      clearInterval(timerInterval);
      answerButtonElement.classList.add('hide')
      score.classList.add('hide')
      result.classList.add('hide')
      document.getElementById('question').innerHTML = "";
      var gameOver = document.createElement('h4');
      gameOver.innerHTML = "TIMES UP GAME OVER!!!"
      question.appendChild(gameOver);
      var highScore = document.createElement("h5");
      highScore.innerHTML = "Your score is " + points + " points";
      question.appendChild(highScore);
      var createInitials = document.createElement('h6');
      createInitials.innerHTML = "Enter Initials Here";
      question.appendChild(createInitials);
      var getInitials = document.createElement('input');
      question.appendChild(getInitials);
      selectAnswer();
    }
    if (currentQuestionIndex === 9) {
      timeEl.classList.add('hide');
      clearInterval(timerInterval);
      answerButtonElement.classList.add('hide')
      score.classList.add('hide')
      result.classList.add('hide')
      document.getElementById('question').innerHTML = "";
      var gameOver = document.createElement('h4');
      gameOver.innerHTML = "YOU ANSWERED ALL 9 QUESTIONS, GAME OVER!!!"
      question.appendChild(gameOver);
      var highScore = document.createElement("h5");
      highScore.innerHTML = "Your score is " + points + " points";
      question.appendChild(highScore);
      var createInitials = document.createElement('h6');
      createInitials.innerHTML = "Enter Initials Here";
      question.appendChild(createInitials);
      var getInitials = document.createElement('input');
      question.appendChild(getInitials);
      selectAnswer();
    }
  }, 1000);
}


//setting variables to shuffle questions
var shuffledQuestions, currentQuestionIndex

//BUTTON CLICK TO START GAME--CALLS START GAME FUNCTION
startButton.addEventListener('click', startGame);
startButton.addEventListener('click', setTime);
//NEXT BUTTON CLICK GETS NEXT QUESTION FROM QUESTIO INDEX
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  //CALLS NEXT QUESTION FUNCTION
  setNextQuestion()
})
//START GAME FUNCTION
function startGame() {
  console.log('started');
  //HIDES THE START BUTTON
  startButton.classList.add('hide')



  //RANDOMIZES THE QUESTIONS IN THE QUESTION INDEX 
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  //SETS CURRENT QUESTION INDEX TO 0
  currentQuestionIndex = 0;
  //REMOVES THE HIDE FUNCTION THAT WAS PLACED ON THE QUESTION CONTAINER
  questionContainer.classList.remove('hide')
  //CALLS SETNEXTQUESTION FUNCTION--SHOWS NEXT QUESTION
  setNextQuestion();
}
//SET NEXT QUESTION
function setNextQuestion() {

  //CALLS RESETSTATE FUNCTION
  resetState();
  //CALLS SHOWQUESTION FUNCTION - WITH RANDOM QUESTION 
  showQuestion(shuffledQuestions[currentQuestionIndex])
  console.log(shuffledQuestions)
}

//showing the answer buttons
function showQuestion(questions) {

  questionElement.innerText = questions.question;
  questions.answers.forEach(answers => {
    var button = document.createElement('button')
    button.innerText = answers.text
    button.classList.add('btn-lrg')
    if (answers.correct) {
      button.dataset.correct = answers.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonElement.appendChild(button)
  });
}
//resets the 
function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild
      (answerButtonElement.firstChild)
  }
  document.getElementById("result").innerHTML = "";
  document.getElementById("score").innerHTML = "";
}

//function as to what happens when answers are selected
function selectAnswer(e) {
  var selectedButton = e.target;
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
    console.log(shuffledQuestions.length);
  }
  if (selectedButton.dataset.correct) {
    var rightWrong = document.createElement("h1");
    rightWrong.innerText = "CORRECT!!"
    answerButtonElement.appendChild(rightWrong)
    var quizScore = document.createElement('h2');
    points = points + 5;
    secondsLeft = secondsLeft + 5;
    quizScore.innerHTML = "You have " + points + " points";
    answerButtonElement.appendChild(quizScore)
    console.log(points);
  }
  else if (selectedButton.dataset.correct !== true) {
    var rightWrong = document.createElement("h1");
    rightWrong.innerText = "WRONG!!"
    answerButtonElement.appendChild(rightWrong);
    var quizScore = document.createElement('h2');
    points = points - 5;
    secondsLeft = secondsLeft - 5;
    quizScore.innerHTML = "You have " + points + " points";
    answerButtonElement.appendChild(quizScore)
  }
}

function createHighscores() {
  var x = document.getElementById(getInitials).Value;
  console.log('input.value');
}





//document.getElementById('question').innerHTML = "";
//var gameOver = document.createElement('h4');
//gameOver.innerHTML = "GAME OVER!!!"
//question.appendChild(gameOver);
//var highScore = document.createElement("h5");
//highScore.innerHTML = "Your score is " + points + " points";
//question.appendChild(highScore);
//var createInitials = document.createElement('h6');
//createInitials.innerHTML = "Enter Initials Here";
//question.appendChild(createInitials);
//var getInitials = document.createElement('input');
//document.getElementById(getInitials).placeholder = "ENTER YOUR INITIALS HERE";
//question.appendChild(getInitials);


//function getInitials() {
//  var initials = document.getElementById("enter-initals").Value;
//  console.log(initials)
//}

//if (isStorage && localStorage.getItem(points)) {
//  elements.scores = localStorage.getItem(points).split(',');
//}

//for (var i = 0; i < selectedButton.dataset.correct; i++) {
//  if (selectedButton.dataset.correct === true) {
//    points++;
//  }
//}
//var gameScore = document.createElement('h1');
//gameScore.innerText = " Your Score is" + points;
//score.appendChild(gameScore);




//window.onload = function timer() {
// var secs = 0;
// var id = setInterval(function timer() {
//   secs++; console.log(secs);
//   if (secs > 9) {
//     clearInterval(id);
//     alert("Time's up!");
//   }
// }, 1000);
//}
//function setStatusClass(element, correct) {
//  clearStatusClass(element)
//  if (correct) {
//    element.classList.add('correct')
//  } else {
//    element.classList.add("wrong")
//  }
//}
//function clearStatusClass(element) {
//  element.classList.remove('correct');
//  element.classList.remove('wrong');
//}

var questions = [
  {
    question: "what is Garfields' dog named?",
    answers: [{ text: "Blue", correct: false },
    { text: "Oscar", correct: false },
    { text: "Odie", correct: true },
    { text: "Max", correct: false },
    ]
  },
  {
    question: "What is the penalty for off-sides?",
    answers: [{ text: "5 yards", correct: true },
    { text: "10 yards", correct: false },
    { text: "15 yards", correct: false },
    { text: "no penalty", correct: false },
    ]
  },
  {
    question: "How many strikes to you get in baseball before you are out?",
    answers: [{ text: "3", correct: true },
    { text: "14", correct: false },
    { text: "5", correct: false },
    { text: "6", correct: false },
    ]
  },
  {
    question: "If Sally sells seashells down by the seashore, how much tax do you pay?",
    answers: [{ text: "10%", correct: false },
    { text: "8%", correct: true },
    { text: "25%", correct: false },
    { text: "No Tax", correct: false },
    ]
  },
  {
    question: "What stone is used to evolve EEVEE into vaporeon?",
    answers: [{ text: "FIRE", correct: false },
    { text: "Water", correct: true },
    { text: "Thunder", correct: false },
    { text: "Grass", correct: false },
    ]
  },
  {
    question: "Which sea-creature has 3 hearts?",
    answers: [{ text: "Sea-Horse", correct: false },
    { text: "Jellyfish", correct: false },
    { text: "Octopus", correct: true },
    { text: "Shark", correct: false },
    ]
  },
  {
    question: "What color are aircraft black boxes?",
    answers: [{ text: "black", correct: false },
    { text: "green", correct: false },
    { text: "orange", correct: true },
    { text: "white", correct: false },
    ]
  },
  {
    question: "What is the penalty for holding?",
    answers: [{ text: "10 yards from previous spot or spot of foul", correct: true },
    { text: "15 yards from previous spot", correct: false },
    { text: "20 yards from spot of the foul", correct: false },
    { text: "no penalty", correct: false },
    ]
  },
  {
    question: "What kind of animal is a prairie dog?",
    answers: [{ text: "Dog", correct: false },
    { text: "Cat", correct: false },
    { text: "Bird", correct: false },
    { text: "Rodent", correct: true },
    ]
  },
  {
    question: "What is the penalty facemasking?",
    answers: [{ text: "15 yards previous spot or end of run", correct: true },
    { text: "5 yards from previous spot", correct: false },
    { text: "20 yards from end of run", correct: false },
    { text: "no penalty", correct: false },
    ]
  }
]































//var quizQuestions = document.getElementById("questions");
//var quizAnswers = document.getElementById('answers');
//var rightWrong = document.getElementById('results');
//var count = document.getElementById('score');
//var time = document.getElementById('timer');

//var q1 = "What color is the sky?";
//var c1 = ["red", "blue", "black", "yellow"];
//var a1 = "blue";

//var newDiv = document.createElement("p");
//newDiv.textContent = q1;
//quizQuestions.appendChild(newDiv);

//var counter = 0;

//for (var i = 0; i, c1[counter].length; i++);
//var answers = document.createElement('li');
//answers.textContent = c1[counter][i];
//answers.setAttribute("data-index", c1[counter][i]);
//quizAnswers.appendChild(answers);









//div2 = document.createElement("ul");
//document.getElementById('answers').appendChild(div2);
//c1.forEach(function (item) {
//  let li = document.createElement('li');
//  div2.appendChild(li);
//  li.innerHTML += item;
//})

//document.getElementById("ul");





//function answer() {
  //if ()
//}//

//console.log(event);













//var counter = 0;
//var getQuestions = document.querySelector("#question");
//var getSelection = document.querySelector("#answerSelection");
//var getAnswer = document.querySelector("#correctAnswer");

//askquestion1();

//function askquestion1() {
// var question1 = document.createElement("h1");
//question1.innerText = q1;
//quizQuestions.appendChild(question1);
//console.log(question1);

//  for (var i = 0; i < ans1; i++) {
//    var ans1 = document.createElement('li');
//    ans1.innerText = ans1;
//    ans1.setAttribute("data-index", ans1);
//    quizQuestions.appendChild(ans1)
//  };
//}

 // ans1.addEventListener(function () {
   // if (this.getAttribute("data-index") === answer1.a1correct) {
     // var result = document.createElement("p");
 ///     result.innerHTML = "CORRECT";
 //     quizQuestions.appendChild(result);
 //     console.log(this.getAttribute);
 //   }
 //   else if (this.getAttribute("data-index") !== a1correct) {
 //     var result = document.createElement("p");
 //     result.innerHTML = "WRONG";
 //     quizQuestions.appendChild(result);
 //   }
    //askquestion2();
 // });/
//}


//function askquestion2() {
//  var question2 = document.createElement("h1");
//  question2.innerText = q2;
//  quizQuestions.appendChild(question2);
//  console.log(question2);

//  for (var i = 0; i < answer2[counter].a2.length; i++) {
//    var ans2 = document.createElement('li');
//    ans2.innerText = answer2[counter].a2[i];
//    ans2.setAttribute("data-index", answer2[counter].a2[i]);
//    quizQuestions.appendChild(ans2);
//  };
//  ans2.addEventListener('click', function () {
//    if (this.getAttribute("data-index") === a2correct) {
 //     var result = document.createElement("p");
   //   result.innerHTML = "CORRECT";
     // quizQuestions.appendChild(result);
//    }
//    else if (this.getAttribute("data-index") !== a2correct) {
//      var result = document.createElement("p");
//      result.innerHTML = "WRONG";
//      quizQuestions.appendChild(result);
//    }
//  });
//}





//for (var j = 0; j < data[counter].question.length; j++) {
//  var getQuestions = document.createElement("h1");
//  getQuestions.textContent = data[counter].question[j];
//  getQuestions.setAttribute("data-index", data[counter].question[j]);
//  quizQuestions.appendChild(getQuestions);
//  counter++;
//  console.log(getQuestions.length);
//}


//for (var i = 0; i < data[counter].answerSelection.length; i++) {
//  var getSelection = document.createElement("li");
//  getSelection.textContent = data[counter].answerSelection[i];
//  getSelection.setAttribute("data-index", data[counter].answerSelection[i]);
//  quizQuestions.appendChild(getSelection);
//  counter++;
//};































//CREATE GET ELEMENTS BY ID FOR DIVS
//var container = document.getElementById("container");

//askQuestions = document.getElementById("card-body");
//getAnswers = document.getElementById("#answer-box");
//showResults = document.getElementById("#results-box");




//function startquiz() {

  //  var questions = [{
    //    question: ["What does JSON stand for?"],
      //  answerSelection: ["A: Java Script Object Notation", "B: Java Script Optional Notation", "C: Java Script Optional Node", "D: Java Scrips Object Notification"],
        //correctAnswer: [0],
//    },
//    {
//        question: ["Which of the following is not a standard HTML tag?"],
//        answerSelection: ["A: div", "B: body", "C: h1", "D: SU"],
//        correctAnswer: [3],
//    }
//    ];

//    var questionDiv = document.createElement("div");
//    document.body.appendChild(questionDiv);

//    for (var i = 0; i < questions.length; i++) {
//        questionDiv.textContent = questions[i];
//        document.body.appendChild(questionDiv);

//    };
//    console.log(questions.length);


//};

//var counter = 0;
//var questions = document.querySelector("#question");
//var getChoice = document.querySelector(data.answerSelection);
//var correctAns = document.querySelector(data.correctAnswer);





//var askQuestions = document.createElement('div');
//askQuestions.textcontent = data[counter].questions;
//askQuestions.append(questions);


//var quizContainer = document.getElementById('quiz');
//var resultsContainer = document.getElementById('results');
//var submitButton = document.getElementById('submit');


//CREATE A TIMER
//CREATE A DATA BASE OF QUESTIONS AND ANSWERS
//CREATE A COUNTER TO CYLCE THROUGH QUESTIONS
//CREATE ON CLICK EVENTS FOR START GAME, VIEW HIGH SCORES, ANSWERS

//function buildQuiz() {
  //  var output = [];
    //myQuestions.forEach(
      //  currentQuestion, questionNumber) => {
        //var answerSelection [];

        //for (letter in currentQuestion.answerSelection) {
         //   answerSelection.push()
        //}
    //}
    //)
//}

//function showResults() { }

//buildQuiz();

//submitButton.addEventListener('click', showResults);

//var data = [{
  //  question: "What does JSON stand for?",
    //answerSelection: { A: "Java Script Object Notation", B: "Java Script Optional Notation", C: "Java Script Optional Node", D: "Java Scrips Object Notification" },
    //correctAnswer: "Java Script Object Notation",
//},
//{
  //  question: "Which of the following is not a standard HTML tag?"
    // answerSelection: { A: "div", B: "body", C: "h1", D: "SU" },
    //correctAnswer: "D: SU"
//},

//];
//console.log(data(question));
//console.log(data.answerSelection);

//var counter = 0;
//var getChoice = document.querySelector("#selection");
//var getQuestions = document.querySelector("#questions");

//var createQuestions = document.createElement("div");
//createQuestions.textcontent = data.question;
//createQuestions.appendChild(data.question);


