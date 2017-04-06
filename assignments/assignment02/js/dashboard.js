/*

Script for dashboard page -
At a first glance, the page will look simple and functional to the user. As they keep using it, the page slowly destructs by making elements harder to use. The user is invited to keep exploring and making use of the website, but at a certain point it will black out making it completely useless.

Pam Menegakis

*/

$(document).ready(function() {

// Displays a greeting to the user based upon the current time
userGreeting();
// Keeps count of the tasks a user adds to the list
taskList();
// Glitches the page as the user interacts with it more
pageGlitch();

// Load the data that will be used later on
$.getJSON('../data/data.json', gotData);

});

// FUNCTION: Keep count of the tasks a user adds to the list with a counter

function  taskList() {
// Set initial count to 0
var counter = 0;

// Run the function every time the user clicks the add button
  $('#add').click(function(){
    // Set input value as a variable
    var toAdd = $('input[name=listItem]').val();
    // Add input value to the list
    $('ul').append('<li>' + toAdd + '</li>');
    // Each time a value is added, add one to the counter
    counter++;
    // Display the counter in the header, followed by text
    $('.counter').text(counter + ' tasks to complete');
  });

};


// FUNCTION: Keep track of the page clicks in order to destruct elements
function pageGlitch() {
// Set initial count to 0
  var pageCount = 0;
// Run the function every time the user clicks anywhere in the page
  $(document).click(function(){
    // Each time a click is generated, add it to the count
    pageCount++;
    // Various if statements to render the page 'difficult' to use
    if (pageCount > 30){
      // Expose a class that will glitch the entire web page with external css styling
      $('body').addClass("glitch");
    }

    if (pageCount > 10) {
      // Go through each div on the page
      $('div').each(function(){
        // Select a random location anywhere within the window
        var x = $(window).width() * Math.random();
        var y = $(window).height() * Math.random();
        // Set the current div's CSS to put it at a random location
        $(this).css({
         position: 'absolute',
         top: y + 'px',
         left: x + 'px'});
       });
     };
  });
};

// FUNCTION: Display a greeting to the user based upon the current time

function  userGreeting() {
  // Create new date object
  var today = new Date();
  // Find the current hour
  var hourNow = today.getHours();
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
  // Write the greeting in the header
  document.getElementById('hello').innerHTML = greeting;

};

// FUNCTION: Display a random person and task count in the leaderboard section

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

  // Display the variables above in the leaderboard
  $('.name').text(firstName + " " + lastName);
  $('.taskCount').text(taskCount);
};
