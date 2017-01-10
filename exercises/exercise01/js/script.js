/*

Week 01 January 10 2017
Text Change

*/

$(document).ready(function() {
  $('#text').hover(function () {
    $('.add').show ();
  $('#text').click(function () {
    $(this).css('color', 'blue');
  });

  });

});
