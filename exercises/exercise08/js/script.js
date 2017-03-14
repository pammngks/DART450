/*

Project Title
March 14 2017
Pam Menegakis

Use blast.js to search for specific words within a paragraph of text.

*/

$(document).ready(function() {

$('form').submit(function(e){
  // Retrieve our paragraph #content. If user previously performed searches, they will be cleared. The user is then able to search their wanted word.

  $('#content').blast(false).blast({
    search: $('#search').val(),
    customClass: 'search', // Add a custom class to the generated elements
    generateIndexID: true // Add an ID to each generated element
  });

  e.preventDefault(); // This instruction is included in order to disable the default behaviour of the form which is to submit the form.
});

});
