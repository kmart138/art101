// index.js - Lab 12: Conditionals
// Author: Kalani Martin
// Date: 5/20/25

// Constants

//functions

function sortingHat(str) {
  
// Gets the remaider of the string length divided by 4

  let mod = str % 4;

// 0-3 choices for the sorting hat
  // 0 = House of theivery and misfortune: Oakland
  // 1 = House of Whippets and Mischief: San Bernadino
  // 2 = House of Fentynal and Influencers: Los Angeles
  // 3 = House of Despair and Desolate: Bakersfeild


  if (mod == 0) {
    return ("House of theivery and misfortune: Oakland.");
  } else if (mod == 1) {
    return ("House of Whippets and Mischief: San Bernadino.");
  } else if (mod == 2) {
    return ("House of Fentynal and Influencers: Los Angeles.");
  } else {
    return ("House of Despair and Desolate: Bakersfeild.");
  }
}

$("#submit").click(function(){
  let userName = $("#user-name").val();
  // for text input, get the length of the string
  let house = sortingHat(userName.length);
  // Display the sorted string in the output field with id user-name-sorted
  $("#output").append('<div class="text"><p>' + "your house is:" + house + '</p></div>');
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
