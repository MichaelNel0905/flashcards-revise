/*
	CWB-205 Complete Web Scripting
	Final Project: Flashcard Game

	Author: Michael Nel
	Date: 28/9/21

	Filename: 			menus.js

================================================================================
Function List:

main()
	Sets variables, arrays, calls the functions neccessary for the functioning
	of the flashcard resource menus.

================================================================================
Global Variable List:

timeID
	Contains the id of a timed command using setInterval.

*/

window.onload = main;

var timeID;

function main() {
   var allElems = document.getElementsByTagName("*");

   // add elements to the menus[] array with class .menu
   for (var i = 0; i < allElems.length; i++) {
      if (allElems[i].className == "menu") menus.push(allElems[i]);
   }

   for (var i = 0; i < menus.length; i++) {
      menus[i].onclick = changeMenu;
      menus[i].onmouseover = moveMenu;
   }

   document.getElementById("clickBox").onclick = closeMenu;
}
