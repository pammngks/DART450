/*

Assignment 02
Pam Menegakis

*/

$(document).ready(function() {

$('.enter').click(function (){
  if (!$('#check').is(':checked')){
    alert('Please confirm that you are not a robot.');
    return false;
  }

  if ($('#name').val().length > 1) {
    window.location = "./web/main.html"
  }
  else {
    alert("Don't you have a name?");
  }
});



});
