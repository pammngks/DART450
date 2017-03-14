/*

Project Title
March 14 2017
Pam Menegakis

Use blast.js to search for specific words within a paragraph of text.

*/

$(document).ready(function() {

  // We're going to use blast to separate the text by characters
  // and for each span with a character in it we're going to add
  // a class named after that character...
  $('#content').blast({
    delimiter: 'character'
  }).each(function () {
    var char = $(this).text(); // Get the character in the span
    char = char.toLowerCase(); // Make it lower case
    $(this).addClass(char); // Add a class to the span with the name of the character
  });

  // Now we'll add keyboard events to highlight all instances of
  // keys we press in the text, using the "blasted" text and our
  // special classes named after characters...

  // Keydown...
  $(document).keydown(function (event) {
    // The letter of the key is in 'event.key'
    // Work out the selector of the class corresponding this key
    // by adding a . in front of it
    var keyClass = '.' + event.key;
    // Select that class and add the 'pressed' class to highlight it
    $(keyClass).addClass('pressed')
  });

  // Keyup
  $(document).keyup(function (event) {
    // Do exactly the same thing, but remove the class instead.
    var keyClass = '.' + event.key;
    $(keyClass).removeClass('pressed')
  });


});
