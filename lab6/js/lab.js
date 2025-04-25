// index.js - making a array and using it with objects
// Author: Kalani Martin
// Date: 4/24/2025

// Constants

// Functions MT
myMainRide = {
  make: "Toyota",
  model: "Sienna",
  color: "Grey",
  year: 2006,
  age: function() {
    return 2025 - this.year;
  }
};


myTransport = ["Toyota Sienna", "Bus", "Walking", "Bus"];

// outputs

document.writeln("Kalani's Ways of Getting Around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");





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
