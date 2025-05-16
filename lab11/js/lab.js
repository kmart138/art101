// index.js - Lab 11: JavaScript Events and Forms
// Author: Kalani Martin
// Date: 5/15/25

// Constants

//functions

// Taking back to a precious lab the sorting function is possible by turing a string into an array. Sorting the array and then turning it back into a string
// This function takes a string as input, splits it into an array of characters, sorts the array, and then joins it back into a string.

function sortString(inputString) {
  return inputString.split('').sort().join('');
}

// listen for the submit button to be clicked

$("#publish").click(function(){


// gets the value of the input field with id user-name

  const userName = $("#user-name").val();

// Sorting the string

  userNameSorted = sortString(userName);

// Display the sorted string in the output field with id user-name-sorted

  $("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');
});


// sortAnagram function shuffles the name to create an anagram
// Reference: https://www.w3schools.com/js/js_array_sort.asp#mark_random

function sortAnagram(name) {
  var userName = name;

  // Split string into an array

  var arrayName = userName.split('');

  // Sort the array by doing so randomly

  var sortedArray = arrayName.sort(function(){return 0.5 - Math.random();});

  // Convert the array back to a string

  var sortedName = sortedArray.join('');

  // Return sorted name

  return sortedName;
}

$("#annagram").click(function(){
  const userName = $("#user-name").val();
  const anagram = sortAnagram(userName);
  $("#output").append('<div class="text"><p>' + anagram + '</p></div>');
});
//TASK X





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
