// index.js - Lab 13: loops
// Author: Kalani Martin
// Date: 5/22/25

// Constants

//functions

$("#publish").click(function(){
  let numCap = $("#user-name").val();
  fizzBuzz(numCap);
})

function fizzBuzz(x) {
  str =""; 
  for (i = 1; i <= x; i++) {
    if (i % 105 == 0) {
      console.log(i + "FizzBuzzBoom!");
      str += i + " FizzBuzzBoom!<br>";
    } else if (i % 15 == 0) {
      console.log(i + "FizzBuzz!");
      str += i + " FizzBuzz!<br>";
    } else if (i % 35 == 0) {
      console.log(i + "BuzzBoom!");
      str += i + " BuzzBoom!<br>";
    } else if (i % 21 == 0) {
      console.log(i + "FizzBoom!");
      str += i + " FizzBoom!<br>";
    } else if (i % 3 == 0) {
      console.log(i + "Fizz!");
      str += i + " Fizz!<br>";
    } else if (i % 5 == 0) {
      console.log(i + "Buzz!");
      str += i + " Buzz!<br>";
    } else if (i % 7 == 0) {
      console.log(i + " Boom!");
      str += i + " Boom!<br>";
    } else {
      console.log(i);
      str += i + "<br>";
    }
  }
  $("#door").html(str);
}


function main() {
  // the code that makes everything happen
}

// let's get this party started
main();
