/*

Script for dashboard page.
Pam Menegakis

*/

$(document).ready(function() {

  var counter = 0;

$('#add').click(function(){
  var toAdd = $('input[name=listItem]').val();
  $('ul').append('<li>' + toAdd + '</li>'); //adds input to list
  counter++;
  $('.counter').text(counter);
});

$('#taskList').click(function(){
  $('ul').append('<li' + toAdd + '</li>');
  counter++;
});

var pageCount = 0;
$(document).click(function(){
  pageCount++;
  if (pageCount > 10){
    $('body').addClass("glitch");
  }
});




});
