var questionpage = '<div class="container"><div class="row"><div class="col-md-2 mx-auto" id="questionNumber">Question 1</div></div><div class="row"><div class="col-md-6 mx-auto" id="question">Who was the 33rd president of fdsa fdsa fdsa fdsaf safdsa the USA?</div></div></div><div class="list-group mx-auto"><button href="#" class="list-group-item list-group-item-action">Answer 1</button><button href="#" class="list-group-item list-group-item-action">Answer 2</button><button href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button><button href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button></div>'

$("#startbutton").on("click", function() {
	$("body").html(questionpage);
})