// Questions array:
questions = [

question1 = {
	questionNumber: "Question 1",
	question: "What is the capital of France?",
	answers: ["Bordeaux", "Paris", "Marseille", "Lyon"],
	rightanswer: "Paris",
	rightanswerpos: 2
},
question2 = {
	questionNumber: "Question 2",
	question: "What is the capital of Australia?",
	answers: ["Sydney", "Melbourne", "Perth", "Canberra"],
	rightanswer: "Canberra",
	rightanswerpos: 4
},
question3 = {
	questionNumber: "Question 3",
	question: "What is the capital of Germany?",
	answers: ["Berlin", "Hamburg", "Munich", "Frankfurt"],
	rightanswer: "Berlin",
	rightanswerpos: 1
},
question4 = {
	questionNumber: "Question 4",
	question: "What is the capital of India?",
	answers: ["Mumbai", "Kolkata", "New Delhi", "Kanpur"],
	rightanswer: "New Delhi",
	rightanswerpos: 3
}

]

// console.log(questions[0].rightanswer);
// console.log(questions[0].answers[0]);

// Variables: 

var time = 10;
var timevar;
var currentquestion = 0;



function timer() {
	time--;
	$("#timeleftnumber").html(time);
	// When time is up:
	if (time === 0) {
		console.log("Time is up!");
		// This loop goes through the 4 answers:
		for ( i = 0; i < questions[currentquestion].answers.length; i++) {
			// This answer variable is the contents of the answer
			var answer = $("#question"+(i)).html();
			console.log(i);
			console.log(answer);
			// If answer = correct answer:
			if (answer === questions[currentquestion].rightanswer) {
				console.log("This is the correct answer");
				$("#question"+i).css("background-color", "green");
			}
		}
	}
}

function setquestion() {
	$("#questionNumber").html(questions[currentquestion].questionNumber);
	$("#question").html(questions[currentquestion].question);
	for (j = 0 ; j <= questions[currentquestion].answers.length-1; j++){
		// console.log(j);
		$("#question" + j).html(questions[currentquestion].answers[j]);
	}
}

function answerdetector() {
	console.log(currentquestion);
	// console.log("You clicked a button");
	// console.log(this);
	// console.log($(this).html());
	// console.log("You clicked on: " + $(this).html());
	// console.log($(this).html());
	if ($(this).html() === questions[currentquestion].rightanswer) {
		console.log("You pressed the right answer");
		currentquestion++;
		setquestion();
		time = 30;
	} else {
		console.log("You pressed the wrong answer");
		currentquestion++;
		setquestion();
		time = 30;
	}
}

// Main code:

$("#startbutton").on("click", function() {
	timevar = setInterval(timer, 1000);
	setquestion();
});

$(".list-group-item").on("click", answerdetector);
