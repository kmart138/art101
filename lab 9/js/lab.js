// index.js - Lab 9: Libraries & jQuery
// Author: Kalani Martin
// Date: 5/8/25

// Constants

// Functions

//button to refer to challange

$("#challenge").append("<button id='button-challenge'>Problem Button</button>");

//A click is used to listen in this case for a event to happen upon press which is a listener

$("#button-challenge").click(function(){
  $("#challenge").toggleClass("special");
});

// CYCLE THIS FOR EVERY SECTION
$("#reflection").append("<button id='button-reflection'>Problem Button</button>");

$("#button-reflection").click(function(){
  $("#reflection").toggleClass("special");
});

$("#probs").append("<button id='button-probs'>Problem Button</button>");

$("#button-probs").click(function(){
  $("#probs").toggleClass("special");
});

$("#res").append("<button id='button-res'>Problem Button</button>");

$("#button-res").click(function(){
  $("#res").toggleClass("special");
});
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
