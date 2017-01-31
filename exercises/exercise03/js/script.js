/*

January 31 2017
It's Supposed To Look Like Shit

*/

$(document).ready(function(){
  const TOTAL_DIVS = 10;
  const INTERVAL = 1000;

  setInterval(function(){
    for (var i=0; i < TOTAL_DIVS; i++) {
      var div = $('<div id="circle' + i + '"></div>')
      $('body').append(div);
    }
  },INTERVAL);
});
