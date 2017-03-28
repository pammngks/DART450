/*

Script for dashboard page.
Pam Menegakis

*/

$(document).ready(function() {

var counter = 0;
var toAdd = $('input[name=listItem]').val();

$('#add').click(function(){
  $('ul').append('<li>' + toAdd + '</li>'); //adds input to list
  counter++;
  $('.counter').text(counter);
});



});
