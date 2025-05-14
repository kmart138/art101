// index.js lab 10
// Author: Kalani Martin
// Date: 5/13/2025

// Constants

// Functions

// The function gives a radom text string between 3 and 100 characters which is chosen by a random number in the formula min - max + 1 * (.01 to 1)
function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const min = 3;
  const max = 100;
  const randomLength = Math.floor(Math.random() * (max - min + 1)) + min;
  const randStart = Math.floor(Math.random() * (text.length - randomLength));
  return text.slice(randStart, randStart + randomLength);
}

// listen for the button click
// this also will spit out a dew variant of the formula to give a new string of text.

$("#main").click(function(){
  const newText = generateRandomText();
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});


main();

