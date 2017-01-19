/*

Week 02 January 17 2017
Narrative and Times

*/

$(document).ready(function() {
  var date = new Date().getHours();
  var greeting;
  var morning = ('Good morning');
  var afternoon = ('Good afternoon');
  var evening = ('Good evening');

  if (date >= 0 && date < 12) {
    greeting = morning;
  }
  else if (date >= 12 && date < 17) {
    greeting = afternoon;
  }
  else if (date >= 17 && date < 24) {
    greeting = evening;
  }


$('#today').text(greeting);
});
