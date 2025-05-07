// index.js lab 7 functions JS
// Author: Kalani Min
// Date: 4/29/2025

// Constants

// Functions

//This function stands in for user name, for var userName to work the functio needs to be named differently. 
function nameUser() {

  //this varible is the username that is going to be filtered and sorted ahead.
  var userName = window.prompt("Enter your name for alhabetical sorting:");  
  console.log("userName =", userName);

  // to make these strings into array for use of sorting nameArray and .split is in order to make sorting possible.
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  //sorting the nameArray in alphabetical order by attacheing name to array sort. 
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  //to turn this array back inot a string to be displayed in the document.
  var nameSorted = nameArraySort.join('');
  return nameSorted;
}


// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen

  // after function nameuser is finished this text will be displayed.
  var name = nameUser();
  document.writeln("sorted name : " + name + "</br>");
  
  document.writeln("<div class='named'>" + "stylized : " + name + "</div>");
}

// let's get this party started
main();



