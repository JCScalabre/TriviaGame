// Questions array:
questions = [

question1 = {
	questionNumber: "Question 1",
	question: "What is the capital of France?",
	answers: ["Bordeaux", "Paris", "Marseille", "Lyon"],
	rightanswer: "Paris",
},
question2 = {
	questionNumber: "Question 2",
	question: "What is the capital of Australia?",
	answers: ["Sydney", "Melbourne", "Perth", "Canberra"],
	rightanswer: "Canberra",
},
question3 = {
	questionNumber: "Question 3",
	question: "What is the capital of Germany?",
	answers: ["Berlin", "Hamburg", "Munich", "Frankfurt"],
	rightanswer: "Berlin",
},
question4 = {
	questionNumber: "Question 4",
	question: "What is the capital of India?",
	answers: ["Mumbai", "Kolkata", "New Delhi", "Kanpur"],
	rightanswer: "New Delhi",
}

]

// console.log(questions[0].rightanswer);
// console.log(questions[0].answers[0]);

// Variables: 

var correctanswers = 0;
var incorrectanswers = 0;
var unanswered = 0;
var time = 30;
var timevar;
var currentquestion = 0;



function timer() {
	time--;
	// console.log(time);
	$("#timeleftnumber").html(time);
	// When time is up:
	if (time === 0) {
		console.log("Time is up!");
		unanswered++;
		$("#timeleft").html("Time is up! The correct answer was: ");

		// This loop goes through the 4 answers:
		for ( i = 0; i < questions[currentquestion].answers.length; i++) {
			// This answer variable is the contents of the answer button
			var answer = $("#question"+(i)).html();

			if (answer === questions[currentquestion].rightanswer) {
				// Makes the right answer highlighted in green:
				$("#question"+i).css("background-color", "lightgreen");
				// Sets the next question after 3 seconds:
				if (currentquestion === 3) {
					clearInterval(timevar);
					setTimeout(scorepage, 4000);
				} else {
					setTimeout(setquestion, 4000);
					currentquestion++;
				}
			}
		}
	}
}

function setquestion() {
	time = 30;
	
	questionpage();

	$(".list-group-item").on("click", answerdetector);

	$("#questionNumber").html(questions[currentquestion].questionNumber);
	$("#question").html(questions[currentquestion].question);
	$("#timeleft").html("Time left: <span id='timeleftnumber'>30</span>")
	for (j = 0 ; j <= questions[currentquestion].answers.length-1; j++) {
		$("#question" + j).html(questions[currentquestion].answers[j]);
	}
	// For loop that clears css from all answers:
	for ( i = 0; i < questions[currentquestion].answers.length; i++) {
		$("#question"+i).css("background-color", "white");

	}
}

function answerdetector() {
	console.log("Current Question #: " + currentquestion);

	// If you press the right answer:
	if ($(this).html() === questions[currentquestion].rightanswer) {
		console.log("You pressed the right answer");
		correctanswers++;
		$(this).css("background-color", "lightgreen");
		$("#timeleft").html("Congratulations! That was the correct answer");
		if (currentquestion !== 3) {
			setTimeout(setquestion, 4000);
			currentquestion++;
			time = 30;
		} else {
			clearInterval(timevar);
			setTimeout(scorepage, 4000);
		}
	} 

	// If you press the wrong answer:
	else {
		console.log("You pressed the wrong answer");
		incorrectanswers++;
		$("#timeleft").html("Oh no! That was the wrong answer");

		// For loop to detect what the right answer was and highlight it in green:
		for ( i = 0; i < questions[currentquestion].answers.length; i++) {
			// This answer variable is the contents of the answer button
			var answer = $("#question"+(i)).html();

			if (answer === questions[currentquestion].rightanswer) {
				// Makes the right answer highlighted in green:
				$("#question"+i).css("background-color", "lightgreen");
			}
		}

		$(this).css("background-color", "tomato");
		if (currentquestion !== 3) {
			setTimeout(setquestion, 4000);
			currentquestion++;
			time = 30;
		} else {
			clearInterval(timevar);
			setTimeout(scorepage, 4000);
		}
	}
}

function questionpage() {
	var questionpage = '<div class="container"><div class="row"><div class="col-md-4 mx-auto" id="questionNumber">Question 0</div></div><div class="row"><div class="col-md-6 mx-auto" id="question">What is the capital of Korea?</div></div><div class="row"><div class="col-md-4 mx-auto" id="timeleft">Time left: <span id="timeleftnumber">30</span></div></div></div><div class="list-group mx-auto"><button href="#" class="list-group-item list-group-item-action" id="question0">1111</button><button href="#" class="list-group-item list-group-item-action" id="question1">2222</button><button href="#" class="list-group-item list-group-item-action" id="question2">3333</button><button href="#" class="list-group-item list-group-item-action" id="question3">4444</button></div>';
	$("body").html(questionpage);
}

// Sets the page to the score page:
function scorepage() {
	var scorepage = '<div class="card mx-auto"><h4>Results</h4><p></p><p>Correct answers: <span id="correct"></span></p><p>Incorrect answers: <span id="incorrect"></span></p><p>Unanswered questions: <span id="unanswered"></span></p><button class="btn btn-primary mx-auto" id="playagain">Play Again</button></div>'
	currentquestion = 0;
	$("body").html(scorepage);

	$("#correct").html(correctanswers);
	$("#incorrect").html(incorrectanswers);
	$("#unanswered").html(unanswered);

	$("#playagain").on("click", function() {
		$("body").html('<div class="card mx-auto"><h4>Trivia Game</h4><p>Welcome to the Trivia Quiz, press start to begin!</p><button class="btn btn-primary mx-auto" id="startbutton">Start</button></div>');
		correctanswers = 0;
		incorrectanswers = 0;
		unanswered = 0;
		$("#startbutton").on("click", function() {
			timevar = setInterval(timer, 1000);
			setquestion();
		});
	});
}

// Main code:

// When the start button is clicked:
$("#startbutton").on("click", function() {
	timevar = setInterval(timer, 1000);
	setquestion();
});