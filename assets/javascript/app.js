// Variables:

// Questions:
var question1 = {
	questionNumber: "Question 1",
	question: "What is the capital of France?",
	answers: ["Bordeaux", "Paris", "Marseille", "Lyon"],
	rightanswer: "Paris"
}

var question2 = {
	questionNumber: "Question 2",
	question: "What is the capital of Australia?",
	answers: ["Sydney", "Melbourne", "Perth", "Canberra"],
	rightanswer: "Canberra"
}

// HTML for 'questionpage' page:
var questionpage = '<div class="container"><div class="row"><div class="col-md-2 mx-auto" id="questionNumber">Question 1</div></div><div class="row"><div class="col-md-6 mx-auto" id="question">Who was the 33rd president of fdsa fdsa fdsa fdsaf safdsa the USA?</div></div><div class="row"><div class="col-md-4 mx-auto" id="timeleft">Time left: <span id="timeleftnumber">30</span></div></div></div><div class="list-group mx-auto"><button href="#" class="list-group-item list-group-item-action" id="question1">Answer 1</button><button href="#" class="list-group-item list-group-item-action" id="question2">Answer 2</button><button href="#" class="list-group-item list-group-item-action" id="question3">Dapibus ac facilisis in</button><button href="#" class="list-group-item list-group-item-action" id="question4">Dapibus ac facilisis in</button></div>';
var time = 5;
var timevar;

// When the start button is clicked:
$("#startbutton").on("click", start);

// start();

// Functions: 

// Our start function that executes when we click the start button:
function start() {
	$("body").html(questionpage);
	timervar = setInterval(timer, 1000);
	setquestion();

	// When you click Answer 1:
	$("#question1").on("click", clickanswerdetector);

	$("#question2").on("click", clickanswerdetector);

	$("#question3").on("click", clickanswerdetector);

	$("#question4").on("click", clickanswerdetector);

}

// Our correct answer checker for when we click an answer:
function clickanswerdetector() {
		if($(this).html() === (question1).rightanswer || $(this).html() === (question2).rightanswer) {
			console.log("You chose the right answer. Good job!!!");
		} else {
			console.log("You chose the wrong answer :(")
		}	
}

// Our timer function:
function timer() {
	time--;

	// This pushes our time variable into the time DOM:
	$("#timeleftnumber").html(time);
	console.log(time);

	// When time is up:
	if (time === 0) {
		clearInterval(timervar);
		answerdetector();
	}
}

// Pushes questions into our DOM:
function setquestion() {
	$("#questionNumber").html(question1.questionNumber);
	$("#question").html(question1.question);
	for (var i = 1; i < question1.answers.length + 1; i++) {
		$("#question" + i).html(question1.answers[i-1]);
	}
}

// This function checks what the right answer was:
function answerdetector() {
	
	// Changes the timer section to a message saying time is up:
	$("#timeleft").html("Time is up! <br> The right answer was: ")

	// This for loop detects the right answer and highlights it in green:
	for (var i = 1; i < question1.answers.length + 1; i++) {
		if (question1.answers[i-1] === question1.rightanswer) {
			$("#question" + i).css("background-color", "green");
		} 	
	}	
}