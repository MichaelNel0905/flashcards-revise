/*
	CWB-205 Complete Web Scripting
	Final Project: Flashcard Game

	Author: Michael Nel
	Date:

	Filename: 			flashcarddata.js
	Supporting Files: 	[tbd]

================================================================================

	This file defines the following arrays for the flashcard game:

	linkList[]
		Contains a list of the titles for the sidebar.

	computerFront[]
		Contains the front sides of all the Computer flashcards.

	computerBack[]
		Contains the back sides of all the Computer flashcards.

	frontSets[]
		Contains the arrays of card fronts.

	backSets[]
		Contains the arrays of card backs.

*/

var linkList = [];
linkList[0] = "Computer Science";
linkList[1] = "Quiz";

var computerFront = [];
computerFront[0] = "What does the CPU do?";
computerFront[1] = "What is the fetch-decode-execute cycle?";
computerFront[2] = "What is an Operating System";

var computerBack = [];
computerBack[0] = "The internal operating unit of the computer, it controls how the computer functions and how fast instructions are completed like arithmetic, logic and input output.";
computerBack[1] = "It's the basic operation cycle of a computer, it is the process of retrieving a program instruction from memory, determines what actions the instruction requires, and carries out those instructions.";
computerBack[2] = "A set of instructions designed to work with a specific type of computer e.g MAC, DELL, HP.";

var quizFront = [];
quizFront[0] = "How many register are there in the CPU?";
quizFront[1] = "What is cache?";
quizFront[2] = "Describe what is meant by processor?";

var quizBack = [];
quizBack[0] = "5";
quizBack[1] = "Fast access memory located near the CPU that's used to store frequently used instructions";
quizBack[2] = "The part of the computer system that handles the instructions used to ensure that hardware and software respond as expected"

var frontSets = [];
frontSets[0] = computerFront;
frontSets[1] = quizFront;

var backSets = [];
backSets[0] = computerBack;
backSets[1] = quizBack;
