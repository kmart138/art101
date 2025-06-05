// index.js - Lab 16: JSON and APIs
// Author: Kalani Martin
// Date: 6/4/25

// Constants

//functions



function numX(pages) {
  let numComic = "";
  if (pages != -1){
    numComic = pages.toString();
  } 
  let ajaxObj = {
    url: "https://xkcd.com/" + numComic + "/info.0.json",
    type: "GET",
    dataType: "json"
  };
  console.log("numX function called");
  $.ajax(ajaxObj)
    .done(function(data) {
      console.log("success");
      console.log(data);
      let title = data.title;
      let image = data.img;  
      let alt = data.alt;    
      let xnum = data.num;
      
      $("#outputText").html('<h1>' + title + '</h1>' +
        '<img src="' + image + '" alt="' + alt + '" title="' + alt + '">' +
        '<p>' + alt + '</p>');
      $("#buttonB").click(function() {
        numX(xnum - 1);
      });
      $("#buttonF").click(function() {
        numX(xnum + 1);
      });
    })
    .fail(function(xhr, status, error) {
      console.log(error + " Status: " + status);
      $("#outputText").html('<p>Error fetching data: ' + error + '</p>');
    });
}

numX(-1); 

// Attach the function to a button click
//$ ("#buttonX").click(function() {
//  numX();
// });

// function main() {
//   console.log("Main function loaded");
// }

// let's get this party started
// main();
