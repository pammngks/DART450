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
  // Page timer
  timer();
  // Keeps count of the tasks a user adds to the list
  taskList();
  // Glitches the page as the user interacts with it more
  // This function is located in glitch.js
  pageGlitch();
  // Choose a random image for the user's challenge opponent
  userProfiles();
  // Use responsiveVoice library in order to speak on mouseover
  voiceOver();
  // Allow challenge to pop up
  popUp();
  // Make dashboard sections draggable
  $('#progressBar').draggable();
  $('#calendar').draggable();
  $('#leaderboard').draggable();
  $('#taskList').draggable();
  $('.glitch').draggable();
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
    // Set up variables for audio files
    var success = document.getElementById('success');
    success.volume = 0.5;
    // Play audio depending on class
    if ($(this).hasClass('done')){
      success.play();
      $('#progressBar').css('background-color','rgb(236,242,114)');
    }
    else {
      $('#progressBar').css('background-color','rgb(213,213,213)');
    }
  });

  // Remove task on click
  $('.task').on('dblclick', 'li', function(){
    $(this).fadeOut('slow');
  });


  // Keep track of the amount of tasks left to complete
  function updateTotal(){
    // Get the total number of tasks minus the number of tasks marked with the class 'done'
    var totalTasks = $('.task li').not('.done').length;
    // List number of tasks with the class done
    var tasksCompleted = $('.done').length;
    // Update the total in the header of web page
    $('.counter').text('You have ' + totalTasks + ' tasks to complete');
    $('.user').text(tasksCompleted);
    $('#toComplete span').text(totalTasks);
    $('#completed span').text(tasksCompleted);
    // Create variable to hold text
    var productivityLevel = "";
    // If user completes more tasks than the total
    if (tasksCompleted > totalTasks) {
      productivityLevel = "You have no life!";
      console.log('User is productive.');
    }
    // If user completes less tasks than the total
    else if (tasksCompleted < totalTasks) {
      productivityLevel = "You're just lazy.";
      console.log('User is not productive.');
    }
    // If user completes the same amount of tasks as total
    else if (tasksCompleted == totalTasks){
      productivityLevel = "Do something!";
      console.log('User is just as productive.');
    }
    // If user successfully completed five tasks
    if (tasksCompleted == 5) {
      $('.color-change').animate({
        backgroundColor: 'rgb(77,209,209)'}, 'slow');
      console.log('User has completed five tasks.');
    }

    // Write text in div
    $('#celebration').text(productivityLevel);
  }
  console.log('total task numbers are displayed');
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
      // Add class to calendar that highlights today's date
      $('#calendar td').addClass('current');
    }

    // Write the greeting in the header
    document.getElementById('hello').innerHTML = greeting;
    // Add a class to the calendar if date matches today
    $('td:eq(' + today.getDay() + ')').addClass('current');

    console.log('greeting has loaded');
  };

  // FUNCTION: Start a timer on page load
  function timer(){
    // Show the timer in the header div
    $('#header').prepend('<p id="timer"><label id="minutes">00</label>:<label id="seconds">00</label></p>');
    // Start timer at 0
    var totalSeconds = 0;
    setInterval(setTime, 1000);
    // Increase timer by 1 every second
    function setTime()
    {
      ++totalSeconds;
      $('#timer > #seconds').html(pad(totalSeconds%60));
      $('#timer > #minutes').html(pad(parseInt(totalSeconds/60)));
    }

    function pad(val)
    {
      var valString = val + "";
      if(valString.length < 2)
      {
        return "0" + valString;
      }
      else
      {
        return valString;
      }
    }
  };

  // FUNCTION: Get a random image on page load and assign it to the opponent in the challenge section
  // The total number of available images in the images/ directory
  const AVAILABLE_IMAGES = 10;
  // Function that chooses a random image from the images/ folder
  function userProfiles(){
    // Choose a random number for the image to use
    var imageNumber = randomIntegerInRange(1,AVAILABLE_IMAGES);
    // Create a string that points to the location of the image
    var imageSource = "../images/profile" + imageNumber + ".jpg";
    // Build the image element
    var img = $('<img class="image" src="' + imageSource + '">');
    // Add the chosen image to corresponding div
    $('.random').append(img);
  }

  // Function that returns a random integer between min and max
  function randomIntegerInRange(min,max){
    // Use Math.floor() to remove anything after the decimal point
    // Use Math.random() to return a number between 0 and 1
    // Use +min to add the min to the random number
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // FUNCTION: Function that calls the responsiveVoice library on mouseover
  function voiceOver(){
    // When user hovers over this class, say something
    $('.hastask').mouseover(function (){
      // Tell the user they are busy
      responsiveVoice.speak("Busy", "US English Male");
    });
    $('.month').mouseover(function (){
      // Tell the user they have a busy month
      responsiveVoice.speak("Looks like a busy month.", "US English Male");
    });
    $('.current').mouseover(function (){
      // Tell the user that this date is in fact today
      responsiveVoice.speak("Here we are, today.", "US English Male");
    });
  }

  // FUNCTION: Function that calls the challenge pop up to display
  function popUp(){
    var div = $('.popUp');
    var interval = 2000;

    setInterval(function(){
      $(div).fadeIn();
      console.log('Asking user to accept challenge.');
    }, interval);

    // If the user accepts by clicking on the button, do this
    $('.acceptBtn').click(function(){
      $(div).fadeOut();
      $(div).remove();
      $('.accepted').fadeIn();
      console.log('Challenge has been accepted');
    });
  }
