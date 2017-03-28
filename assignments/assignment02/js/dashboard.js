/*

Script for dashboard page.
Pam Menegakis

*/

$(document).ready(function() {

$('#add').click(function(){
  var toAdd = $('input[name=listItem]').val();
  $('ul').append('<li>' + toAdd + '</li>'); //adds input to list
});


});
