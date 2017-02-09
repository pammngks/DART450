/*

&&##%$ you!

*/

$(document).ready(function() {
  $('#button').click (function(){
    var toAdd = $('input[name=listItem]').val();
    $('ol').append('<li>' + toAdd + '</li>');
  });

  $(document).on('dblclick', 'li', function(){
    $(this).toggleClass('strike').fadeOut('slow');
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
