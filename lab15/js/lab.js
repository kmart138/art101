// Lab 15: AJAX
// Author: Kalani Martin
// Date: 5/29/25

// Constants

//functions

const ajaxObj = {
url: "https://api.chucknorris.io/jokes/random",
type: "GET",
dataType: "json"
}

$("#buttonX").click(function() {
  $.ajax(ajaxObj)
    .done(function(data) {
      console.log("success");
      console.log(data);
      let joke = data.value;
      $("#output").append('<p>' + joke + '</p>');
    })
    .fail(function(xhr, status, error) {
      console.log(error + " Status: " + status);
    });
}
);




function main() {
  // the code that makes everything happen
}

// let's get this party started
main();
