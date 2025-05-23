// index.js - Lab 13: loops
// Author: Kalani Martin
// Date: 5/22/25

// Constants

//functions


function fizzBuzz() {
  str ="";  
  for (i = 1; i <= 200; i++) {
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
  $("#output").html(str);
}


function main() {
  fizzBuzz();
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
