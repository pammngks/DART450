/*

DART450
Week 01 January 10 2017
Text Change

*/

// We use "document ready" so that our code only runs once the whole
// webpage is loaded and ready.

$(document).ready(function() {
  $('#text').hover(function () {
    $('.add').show ();
  $('#text').click(function () {
    $(this).css('color', 'blue');
  });

  });

});
