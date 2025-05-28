// index.js - Lab 12: Conditionals
// Author: Kalani Martin
// Date: 5/20/25

// Constants

//functions

let houses = [
  "House of theivery and misfortune: Oakland - the city of car theft",
  'House of Whippets and Mischief: San Bernadino - the city of crime <img src="./img/sanbern.jpg" alt="San Bernadino" style="height:50px;">', 
  "House of fentanyl and Influencers: Los Angeles - the city of influencers",
  "House of Despair and Desolate: Bakersfeild - the city of farming"
];

function sortingHat(str) {
  
// Gets the remainder of the string length divided by 4

  let mod = str % houses.length;

// 0-3 choices for the sorting hat
  // 0 = House of theivery and misfortune: Oakland
  // 1 = House of Whippets and Mischief: San Bernadino
  // 2 = House of Fentynal and Influencers: Los Angeles
  // 3 = House of Despair and Desolate: Bakersfeild


return houses[mod];
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
