/*

It's Supposed To Look Like Shit

*/

$(document).ready(function() {

  const TOTAL_DIVS = 10;
  const INTERVAL = 100;
  setInterval(function () {
    for (var i = 0; i < TOTAL_DIVS; i++) {
      var div = $('<div id="div' + i + '"></div>')
      $('body').append(div);
    }
  },INTERVAL);
});
