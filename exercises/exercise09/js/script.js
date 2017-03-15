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

});

// gotData (data)
//
// This function gets called by getJSON when the data has been loaded.
// The data itself will be in the 'data' argument as a JavaScript object.
function gotData (data) {

  // Get a task
  var task = getRandomElement(data.task);
  $('#need').text(task);

  var task = getRandomElement(data.task);
  $('#should').text(task);

  var task = getRandomElement(data.task);
  $('#why').text(task);
}

// getRandomElement

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
