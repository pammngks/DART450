/*

Script for dashboard page.
Pam Menegakis

*/

$(document).ready(function() {

// Displays a greeting to the user based upon the current time
userGreeting();

// Load the data that will be used later on
$.getJSON('../data/data.json', gotData);

});

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

// Function: Display a random first name, last name and task count in the leaderboard section
function gotData(data) {
  // Get a first name
  var firstName = getRandomElement(data.firstName);
  // Get a last name
  var lastName = getRandomElement(data.lastName);
  // Get a task count
  var taskCount = getRandomElement(data.taskCount);

// Get random elements every time the page loads
  function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

  $('.name').text(firstName + " " + lastName);
  $('.taskCount').text(taskCount);
}
