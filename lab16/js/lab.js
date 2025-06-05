// index.js - Lab 16: JSON and APIs
// Author: Kalani Martin
// Date: 6/4/25

// Constants

//functions


const ajaxObj = {
  url: "https://xkcd.com/info.0.json",
  type: "GET",
  dataType: "json"
};

function numX() {
  console.log("numX function called");
  $.ajax(ajaxObj)
    .done(function(data) {
      console.log("success");
      console.log(data);
      let title = data.title;
      let image = data.img;  
      let alt = data.alt;    

      
      $("#output").html('<h1>' + title + '</h1>' +
        '<img src="' + image + '" alt="' + alt + '" title="' + alt + '">' +
        '<p>' + alt + '</p>');
    })
    .fail(function(xhr, status, error) {
      console.log(error + " Status: " + status);
      $("#output").html('<p>Error fetching data: ' + error + '</p>');
    });
}

numX(); 

// Attach the function to a button click
//$ ("#buttonX").click(function() {
//  numX();
// });

// function main() {
//   console.log("Main function loaded");
// }

// let's get this party started
// main();
