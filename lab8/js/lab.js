// index.js lab 8
// Author: Kalani Martin
// Date: 5/6/2025

// Constants

// Functions

// console expirement: NumMinus is a varible minus 2.

function numMinus(x){
  return (x-2)
}

// test function to see if the function works

console.log(numMinus(5)); 
console.log(numMinus(10));

// console.log(numMinus(10)); // should return 8
// console.log(numMinus(5)); // should return 3

array = [6,23,78,2,99,1]
console.log("my array", array); 

// this is the array []
// console.log "my array", array); is used to forst name the array as "array" then use the function numMinus to minus 2 from each number in the array.

var results = array.map(numMinus);
console.log("my array after map with numMinus", results);

// this is the array after the map function is used to minus 2 from each number in the array.

var results = array.map(function(x){
  return x ** 0.2;
})
// should return array with each number minus 2 then ** 0.2.

console.log("Results with anon function", results);

var mapResults = "Original array: " + "[" + array + "]" + "<br>Minus 2: " + array.map(numMinus) + "<br>" + "To The Power Of 0.2: " + results;

$("#output").html(mapResults)

function main() {
  
}

// let's get this party started
main();



