/*

Exercise 09: Data
Pam Menegakis

Chooses random tasks from local JSON data to fill out a command.

*/


$(document).ready(function() {

  // The first thing we need to do is load the data we're going
  // to use to get random words.
  //
  // For that we use jQuery's .getJSON() function, which we give
  // the location of the file, and a function to call when the data
  // is available...
  $.getJSON('data/data.json', gotData);

// gotData (data)
//
// This function gets called by getJSON when the data has been loaded.
// The data itself will be in the 'data' argument as a JavaScript object.
function gotData (data) {

  // Get a task
  var task = getRandomElement(data.task);
  $('#need').text(task);
  // Get a second task
  var task = getRandomElement(data.task);
  $('#should').text(task);
  // Get a third task
  var task = getRandomElement(data.task);
  $('#why').text(task);
}

// Get a random task every time the page loads

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Go through each div on the page...
$('div').each(function() {

  // Select a random location anywhere within the window
  var x = $(window).width() * Math.random();
  var y = $(window).height() * Math.random();

  // Set the current div's CSS to put it at our random location
  // by using its offset
  $(this).css({
    position: 'absolute',
    top: y + 'px',
    left: x + 'px'
  });

  // Make the current div draggable by using jQuery UI's .draggable()
  $(this).draggable();

});
});
