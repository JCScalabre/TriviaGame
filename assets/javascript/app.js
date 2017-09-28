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
var questionpage = '<div class="container"><div class="row"><div class="col-md-2 mx-auto" id="questionNumber">Question 1</div></div><div class="row"><div class="col-md-6 mx-auto" id="question">Who was the 33rd president of fdsa fdsa fdsa fdsaf safdsa the USA?</div></div><div class="row"><div class="col-md-6 mx-auto" id="timeleft">Time left: <span id="timeleftnumber">30</span></div></div></div><div class="list-group mx-auto"><button href="#" class="list-group-item list-group-item-action" id="question1">Answer 1</button><button href="#" class="list-group-item list-group-item-action" id="question2">Answer 2</button><button href="#" class="list-group-item list-group-item-action" id="question3">Dapibus ac facilisis in</button><button href="#" class="list-group-item list-group-item-action" id="question4">Dapibus ac facilisis in</button></div>';
var time = 30;
var nexttime = 3;
var timervar;
var lockstate = false;

// Main code: 

// When the start button is clicked:
$("#startbutton").on("click", start);


// Functions: 

// Our start function that executes when we click the start button:
function start() {
	$("body").html(questionpage);
	timervar = setInterval(timer, 1000);
	setquestion1();

	console.log(lockstate);

	// When you click Answer 1:
	$("#question1").on("click", clickanswer1detector);

	$("#question2").on("click", clickanswer1detector);
	
	$("#question3").on("click", clickanswer1detector);

	$("#question4").on("click", clickanswer1detector);
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
		console.log("Time is up");
		answer1detector();
	}
}

// Question 1 functions:

// Pushes question into our DOM:
function setquestion1() {
	$("#questionNumber").html(question1.questionNumber);
	$("#question").html(question1.question);
	for (var i = 1; i < question1.answers.length + 1; i++) {
		$("#question" + i).html(question1.answers[i-1]);
	}
}

// Our correct answer checker for when we click an answer:
function clickanswer1detector() {

	if (lockstate === false) {
		if($(this).html() === (question1).rightanswer) {
			nexttime=3;
			timervar2 = setInterval(function() {
				nexttime--;
				console.log(nexttime);
				// Pushing time var into timeleftnumber span
				$("#nextleftnumber").html(nexttime);
				if (nexttime===0){
					console.log("Moving onto question 2");
					setquestion2();
					clearInterval(timervar2);
					lockstate=false;
					clickanswer2detector();
				}
			}, 1000);

			console.log("You chose the right answer. Good job!!!");
			// Replacing timeleft with congrats message:
			$("#timeleft").html("Congratulations! <br> That was the right answer. <br> Next question starts in: <span id='nextleftnumber'>3</span>");
			
			clearInterval(timervar);
			$(this).css("background-color", "green");
		} else {
			console.log("You chose the wrong answer :(");
			// Replacing timeleft with oh no message:
			$("#timeleft").html("Oh no! <br> That was the wrong answer.")
			
			clearInterval(timervar);
			$(this).css("background-color", "red");
			$("#question2").css("background-color", "green");
		}	
	}
	lockstate = true;
}

// This function checks what the right answer was:
function answer1detector() {
	
	// Changes the timer section to a message saying time is up:
	$("#timeleft").html("Time is up! <br> The right answer was: ")

	// This for loop detects the right answer and highlights it in green:
	for (var i = 1; i < question1.answers.length + 1; i++) {
		if (question1.answers[i-1] === question1.rightanswer) {
			$("#question" + i).css("background-color", "green");
		} 	
	}	
}

// Question 2 functions:

// Pushes question into our DOM:
function setquestion2() {
	$("#questionNumber").html(question2.questionNumber);
	$("#question").html(question2.question);
	for (var i = 1; i < question2.answers.length + 1; i++) {
		$("#question" + i).html(question2.answers[i-1]);
	}
}

// Our correct answer checker for when we click an answer:
function clickanswer2detector() {
	if($(this).html() === (question2).rightanswer) {
		console.log("You chose the right answer. Good job!!!");
	} else {
		console.log("You chose the wrong answer :(")
	}	
}

// This function checks what the right answer was:
function answer2detector() {
	
	// Changes the timer section to a message saying time is up:
	$("#timeleft").html("Time is up! <br> The right answer was: ")

	// This for loop detects the right answer and highlights it in green:
	for (var i = 1; i < question2.answers.length + 1; i++) {
		if (question2.answers[i-1] === question2.rightanswer) {
			$("#question" + i).css("background-color", "green");
		} 	
	}	
}

function answerpage() {

}