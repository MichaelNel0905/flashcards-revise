/*
	CWB-205 Complete Web Scripting
	Final Project: Flashcard Game

	Author: Michael Nel
	Date: 28/9/21

	Filename: 			flashcards.js
	Supporting Files: 	[tbd]

================================================================================

*/

function addEvent(object, evName, fnName, cap) {
	if (object.attachEvent)
		object.attachEvent("on" + evName, fnName);
	else if (object.addEventListener)
		object.addEventListener(evName, fnName, cap);
}

addEvent(window, "load", main, false);

function main() {
	createSidebar();
}

function createSidebar() {
	var sidebar = document.getElementById("sidebar"); // Locates element via sidebar id
	var gameList = document.createElement("ul"); // Create unordered list tag
	var sidebarItems = []; // Set the array

	for (var i = 0; i < linkList.length; i++) {
		sidebarItems[i] = document.createElement("li");	// Creates list tag 
		sidebarItems[i].innerHTML = "<a href='#'>" + linkList[i] + "</a>";	// Within <li> there's an anchor to list to the next subject
		sidebarItems[i].index = i;	// Assign index of sidebarItems to index of for loop
		gameList.appendChild(sidebarItems[i]);	// Append sidebarItems to <ul>
	}

	// Each item in the sidebar has it's own onclick function
	sidebarItems[0].onclick = function() {
		createGame(createCardSet(frontSets[0], backSets[0]));
	}

	sidebarItems[1].onclick = function() {
		createQuiz(createQuizSet(frontSets[1], backSets[1]));
	}

	sidebar.appendChild(gameList);
}

function createCardSet(frontPhrases, backPhrases) {
	var cards = []; // Creates array to load parameters

	// Populate the cards array with a bunch of stuff
	for (var i = 0; i < frontPhrases.length; i++) {
		cards[i] = document.createElement("div"); // Creating element for the card itself
		cards[i].className = "card";
		cards[i].id = "currentCard";
		cards[i].index = i;

		cards[i].front = document.createElement("p"); // Creating element for the front facing card and assigning attributes to it
		cards[i].front.id = "front";
		cards[i].front.innerHTML = frontPhrases[i];

		cards[i].back = document.createElement("p"); // Creating element for the back facing card and assigning attributes to it
		cards[i].back.id = "back";
		cards[i].back.innerHTML = backPhrases[i];

		// show the front of the card first.
		cards[i].appendChild(cards[i].front); // First card is loaded and displays the front facing
	}

	return cards;
}

function createGame(cards) {
	var cardBox = document.getElementById("flashcards"); // Find tag with flashcards id

	// These two functions make sure there are no dupliates when link is clicked
	if (document.getElementById("currentCard")) {
		cardBox.removeChild(document.getElementById("currentCard"));
	}

	if (document.getElementById("cardFooter")) {
		cardBox.removeChild(document.getElementById("cardFooter"));
	}

	if (document.getElementById("answers")) {
		document.getElementById("answers").style = "display: none;";
	}

		document.getElementById("questions").style = "display: none;";


	cardBox.style = "display: flex;"; // Set cardBox display

	// Start with the first card
	cardBox.appendChild(cards[0]);

	var cardFooter = document.createElement("p"); // Create <p> tag
	cardFooter.id = "cardFooter"; // and assign id 

	var prevButton = document.createElement("input"); // Define input tag that functions as a back button & set attributes e.g type, src, alt
	prevButton.type = "image";
	prevButton.src = "images/prev.png";
	prevButton.alt = "Previous Card";
	prevButton.onclick = function() {
		// Get the index of the current card
		var currentCard = document.getElementById("currentCard");
		var currentIndex = currentCard.index;

		// Decrease the index.
		currentIndex--;

		// If currentCard is the first card, go to the end
		if (currentIndex == -1) {
			currentIndex = cards.length - 1;
		}

		// Change the card.
		changeCard(cards[currentIndex]);
	}
	// Add prevButton to parent (cardFooter)
	cardFooter.appendChild(prevButton);

	var flipButton = document.createElement("input"); // Define input tag that functions as a flip button & set attributes e.g type, src, alt
	flipButton.type = "image";
	flipButton.src = "images/flip.png";
	flipButton.alt = "Flip Card";
	flipButton.onclick = function() {
		flipCard(currentCard);
	}
	// Add flipButton to parent (cardFooter)
	cardFooter.appendChild(flipButton);

	var nextButton = document.createElement("input"); // Define input tag that functions as a forward button & set attributes e.g type, src, alt
	nextButton.type = "image";
	nextButton.src = "images/next.png";
	nextButton.alt = "Next Card";
	nextButton.onclick = function() {
		// Get the index of the current card
		var currentCard = document.getElementById("currentCard");
		var currentIndex = currentCard.index;

		// Increase the index.
		currentIndex++;

		// If currentCard is the last card, go to the beginning
		if (currentIndex == cards.length) currentIndex = 0;

		// Change the card.
		changeCard(cards[currentIndex]);
	}
	// Add nextButton to parent (cardFooter)
	cardFooter.appendChild(nextButton);

	// Add cardFooter to parent (cardBox)
	cardBox.appendChild(cardFooter);
}

function flipCard() {
	// Locate necessary elements and assign to a variable
	var cardBox = document.getElementById("flashcards");
	var currentCard = document.getElementById("currentCard");

	// This condition checks for which card side is active and switches them
	if (document.getElementById("front")) {
		currentCard.removeChild(currentCard.front);
		currentCard.appendChild(currentCard.back);
	}
	else if (document.getElementById("back")) {
		currentCard.removeChild(currentCard.back);
		currentCard.appendChild(currentCard.front);
	}
}

function changeCard(card) {
	var cardBox = document.getElementById("flashcards");
	var oldCard = document.getElementById("currentCard");

	// Replace current card with new card
	cardBox.removeChild(oldCard);
	cardBox.appendChild(card);
}

// Quiz
function createQuizSet(question, answer) {
	var questions = []; // Creates array to load parameters

	// Populate the questions array with a bunch of stuff
	for (var i = 0; i < question.length; i++) {
		questions[i] = document.createElement("div"); // Creating the element for the question itself and assign attributes to it
		questions[i].className = "question";
		questions[i].id = "currentQuestion";
		questions[i].index = i;

		questions[i].question = document.createElement("p"); // Creating the element for the question and assigning attributes to it
		questions[i].question.id = "questions"; // Assigning the Qs side of the array to an id of question otherwise the Qs won't display correctly
		questions[i].question.innerHTML = question[i]; // Append question text to array at index i

		questions[i].answer = document.createElement("p"); // Same can be said for the previous 3 lines but for the answers
		questions[i].answer.id = "answers";
		questions[i].answer.innerHTML = answer[i];

		// show the questions first
		questions[i].appendChild(questions[i].question);

	}

	return questions;
}

function createQuiz(questions) {

	// Locate necessary elements and assign to variables
	var questionBox = document.getElementById("questions");

	var inputs = [];
	
	// Make sure there is only questionBox displayed
	questionBox.style = "display: unset;";

	// Make sure there is only the questions being displayed once the quiz is creating
	if (document.getElementById("flashcards")) {
		document.getElementById("flashcards").style = "display: none;";
	}
	// Make sure there are no duplicates displaying when link is clicked
	if (document.getElementById("currentQuestion")) {
		questionBox.removeChild(document.getElementById("currentQuestion"));
	}

	if (document.getElementById("questionFooter")) {
		questionBox.removeChild(document.getElementById("questionFooter"));
	}

	if (document.getElementById("inputBox")) {
		questionBox.removeChild(document.getElementById("inputBox"));
	}

	if (document.getElementById("btnSubmit")) {
		questionBox.removeChild(document.getElementById("btnSubmit"));
	}

	for (i = 0; i < questions.length; i++) {
        var questionFooter = document.createElement("p");
        questionFooter.id = "questionFooter";		

		questionFooter.appendChild(questions[i]);

		var inputBox = document.createElement("input");
		inputBox.id = "inputBox";
		inputs.push(inputBox);
		inputs.index = i;
		inputBox.type = "text";

		questionFooter.appendChild(inputs[i]);
		
		questionBox.appendChild(questionFooter);
	}

	var btnSubmit = document.createElement("button");
	btnSubmit.id = "btnSubmit"
	btnSubmit.type = "submit";
	btnSubmit.innerHTML = "Submit";

	questionFooter.appendChild(btnSubmit);

	var answers = document.createElement("div");

	btnSubmit.onclick = function() {
		
		if (inputs[0].value == "") { // Must use .value when checking for user input and .innerHTML when reading the values from an array
			if (inputs[1].value == "") {
				if (inputs[2].value == "") {
					alert("Please enter your answer");
				}
			}
		}		
		
		if (inputs[0].value == questions[0].answer.innerHTML){
			inputs[0].className = "correctAnswer";
		} if (inputs[0].value != "" && inputs[0].value !== questions[0].answer.innerHTML) {
			inputs[0].className = "incorrectAnswer";
		}			
		
		
		 if (inputs[1].value == questions[1].answer.innerHTML) {
			inputs[1].className = "correctAnswer";
		} if (inputs[1].value != "" && inputs[1].value !== questions[1].answer.innerHTML) {
			inputs[1].className = "incorrectAnswer";
		}
		
		 if (inputs[2].value == questions[2].answer.innerHTML) {
			inputs[2].className = "correctAnswer";
		} if (inputs[2].value != "" && inputs[2].value !== questions[2].answer.innerHTML) {
			inputs[2].className = "incorrectAnswer";
		}	
		
		if (inputs[0].value != "" 
					&& inputs[0].value != questions[0].answer.innerHTML 
					&& inputs[1].value != "" && inputs[1].innerHTML 
					!= questions[1].answer.innerHTML 
					&& inputs[2].value != "" && inputs[2].value 
					!= questions[2].answer.innerHTML) 
			{

			answers.id = "answers";
			answers.innerHTML = "<a id='hide'>Hide</a><h1>Answers: </h1>" + 
					questions[0].answer.innerHTML + 
					"</br></br>" + questions[1].answer.innerHTML + 
					"</br></br>" + questions[2].answer.innerHTML;		
			
			answers.style = "display: grid;";
			var clickBox = document.getElementById("clickBox");
			clickBox.appendChild(answers);

		}		
		
		document.getElementById("hide").onclick = function() {
			answers.style = "display: none;";
		}
		
		
	}	

}
