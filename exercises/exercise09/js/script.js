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
  // Now we will select random elements from the three arrays inside
  // our JSON to get a random condiment, cat, and room. Then add those
  // words onto our page by setting the text of the appropriate span.

  // Get a task
  var task = getRandomElement(data.task);
  $('#task').text(task);
}

// getArticle (string)
//
// Returns 'a' if the string starts with a consonant and
// return 'an' if the string starts with a vowel
function getArticle(string) {
  var article;
  // Get the first letter of the string in lower case
  var firstLetter = string.charAt(0).toLowerCase();
  // Check if the letter appears in the string 'aeiou'
  // We use indexOf, which returns the location in a string
  // of the argument string or -1 if it's not found.
  // Note how, weirdly, we can all indexOf on a literal string!
  if ("aeiou".indexOf(firstLetter) != -1) {
    // if it does, we have a vowel...
    article = "an"
  }
  else {
    // if not we have a consonant
    article = "a"
  }
  // Return the article
  return article;
}

// getRandomElement ()
//
// Our old friend
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
