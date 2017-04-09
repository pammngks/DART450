/*

Script for dashboard page -
At a first glance, the page will look simple and functional to the user. As they keep using it, the page slowly destructs by making elements harder to use. The user is invited to keep exploring and making use of the website, but at a certain point it will black out making it completely useless.

Pam Menegakis

*/

$(document).ready(function() {

// Disable text selection on the entire web page
$("body").disableSelection();
// Displays a greeting to the user based upon the current time
userGreeting();
// Keeps count of the tasks a user adds to the list
taskList();
// Glitches the page as the user interacts with it more
pageGlitch();

challengeBar();

});

// FUNCTION: Add items to a list and keep count of the amount of tasks
function taskList() {

  // Add a task to the list every time the add button is triggered
  $('#add').click(function(){
    // Set the input value as a variable
    var toAdd = $('input[name=listItem]').val();
    // If the input is empty, prompt an alert
    if (toAdd === ""){
      alert ("Don't you have things to do?");
    }
    // If input is not empty, add the task to the list
    else {
    var added = $('ol').append('<li>' + toAdd + '</li>');
  }
    // Clear the input field every time the add button is triggered
    $('input[name=listItem]').val('');
    // Update the total amount of tasks each time an input is added to the list
    updateTotal();
});

    // Toggle a class when the list item is clicked. The class being toggled is a line-through text effect in order to indicate if the task has been completed.
    $('.task').on('click', 'li', function(){
      $(this).toggleClass('done');
      // Update the total amount of tasks each time the list item is clicked
      updateTotal();
    });

    // Keep track of the amount of tasks left to complete
    function updateTotal(){
      // Get the total number of tasks minus the number of tasks marked with the class 'done'
      var totalTasks = $('.task li').not('.done').length;
      // Update the total in the header of web page
      $('.counter').text(totalTasks + ' tasks to complete');
      $('#currentUser').text(totalTasks);
    }
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
    if (pageCount > 60){
      // Expose a class that will glitch the entire web page with external css styling
      $('body').addClass("glitch");
    }

    if (pageCount > 50) {
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
function challengeBar(){

// Load the data from the external JSON file
$.getJSON('../data/data.json', gotData);
  // Display a random person and task count in the leaderboard section
  function gotData(data) {
    // Get a first name
    var first1 = getRandomElement(data.firstName);
    var first2 = getRandomElement(data.firstName);
    var first3 = getRandomElement(data.firstName);
    var first4 = getRandomElement(data.firstName);
    // Get a last name
    var last1 = getRandomElement(data.lastName);
    var last2 = getRandomElement(data.lastName);
    var last3 = getRandomElement(data.lastName);
    var last4 = getRandomElement(data.lastName);
    // Get a task count
    var task1 = getRandomElement(data.taskCount);
    var task2 = getRandomElement(data.taskCount);
    var task3 = getRandomElement(data.taskCount);
    var task4 = getRandomElement(data.taskCount);

    $('.user1').text(first1 + " " + last1);
    $('.user2').text(first2 + " " + last2);
    $('.user3').text(first3 + " " + last3);
    $('.user4').text(first4 + " " + last4);
    $('.points1').text(task1);
    $('.points2').text(task2);
    $('.points3').text(task3);
    $('.points4').text(task4);
    $('#opponent').text(task3);

    console.log('leaderboard has loaded');

    function challenge(){

    }

    // Get random elements every time the page loads
    function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  };

};
};
