/*

Week 02 January 17 2017
Narrative and Times

*/

$(document).ready(function() {
  var date = new Date();
  var greeting = "Good";
    if (now.getHours() > 17) {
      greeting += " evening.";
    }
    else {
      greeting += " day.";
    }


$('#today').text(greeting);
});
