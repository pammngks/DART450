/*

&&##%$ you!

*/

$(document).ready(function() {
  $('#button').click (function(){
    var toAdd = $('input[name=listItem]').val();
    $('ol').append('<li>' + toAdd + '</li>');
    responsiveVoice.speak("You're wasting time, stupid.","US English Male");
  });

  $(document).on('dblclick', 'li', function(){
    $(this).toggleClass('strike').fadeOut('slow');
    responsiveVoice.speak("But did you actually do it?","US English Male");
  });

  $('input').focus(function(){
    $(this).val('');
  });

  $('ol').sortable();
}
);





// $(document).click(function() { // on page click
//   responsiveVoice.speak("Just get started on it already","US English Male");
// });
// });0.5
