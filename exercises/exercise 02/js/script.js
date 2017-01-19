/*

Week 02 January 17 2017
Narrative and Times

*/

$(document).ready(function() {
  //greeting message
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
// madlibs
  var madLibs = (function() {
    var story = document.getElementById("story");
    var name = document.getElementById("name").value;
    var noun = document.getElementById("noun").value;
    var adjective = document.getElementById("adjective").value;
    story.innerHTML = name + " something" + adjective + "  something" + noun + " something!";
  }

$(document).ready(function(){
  $('#generate').click(function(){
    madLibs();
  });
});
});
