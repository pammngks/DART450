/*

Script for dashboard page.
Pam Menegakis

*/

$(document).ready(function() {

// Displays a greeting to the user based upon the current time
userGreeting();

var counter = 0;

  $('#add').click(function(){
    var toAdd = $('input[name=listItem]').val();
    $('ul').append('<li>' + toAdd + '</li>'); //Adds input to list
    counter++;
    $('.counter').text(counter + ' tasks to complete');

  });



  var pageCount = 0;
  $(document).click(function(){
    pageCount++;

    if (pageCount > 30){
      $('body').addClass("glitch");
    }

    if (pageCount > 10) {
      $('div').draggable();
    }

  });

// Function: Display a greeting to the user based upon the current time

function  userGreeting() {
  var today = new Date(); // Create new date object
  var hourNow = today.getHours(); // Find the current hour
  var greeting;

// Displays the appropriate greeting based on the current time
  if (hourNow > 18) {
    greeting = 'Good evening';
  }

  else if (hourNow > 12) {
    greeting = 'Good afternoon';
  }

  else if (hourNow > 0) {
    greeting = 'Good morning';
  }

  else {
    greeting = 'Welcome';
  }

  document.getElementById('hello').innerHTML = greeting; // Write the greeting in the header

}













});
