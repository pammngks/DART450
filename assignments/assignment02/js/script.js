/*

Assignment 02
Pam Menegakis

*/

$(document).ready(function() {

$('.enter').click(function(){
  if (!$('#check').is(':checked')){
    alert('Please confirm that you are not a robot.');
    return false;
  }
});

});
