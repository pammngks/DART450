/*

&&##%$ you!

*/

$(document).ready(function() {
  $('#button').click (function(){
    responsiveVoice.speak("You're wasting time, idiot.","UK English Female"); // voice on click of button
    var toAdd = $('input[name=listItem]').val();
    $('ol').append('<li>' + toAdd + '</li>'); // adds input to list
  });

  $(document).on('dblclick', 'li', function(){
    $(this).toggleClass('strike').fadeOut('slow'); // strike-through when user double clicks item + fade
    responsiveVoice.speak("But did you actually do it?","UK English Female"); // voice on double click
  });

  $('ol').sortable();
}
);
