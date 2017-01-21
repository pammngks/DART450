/*

Week 02 January 17 2017
Narrative and Times

*/

$(document).ready(function(){
  //enter name
  var userName = prompt ("Enter your name", "");
  //greeting message
  var date = new Date().getHours();
  var greeting;
  var morning = ('Good morning,');
  var afternoon = ('Good afternoon,');
  var evening = ('Good evening,');

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
  document.write(greeting + " " + userName + "!");
// madlibs
  var madLibs = function(){
    var story = document.getElementById("story");
    var noun = document.getElementById("noun").value;
    var adjective = document.getElementById("adjective").value;
    var place = document.getElementById("place").value;
    var color = document.getElementById("color").value;
    story.innerHTML = name + place + " something" + adjective + "  something" + noun + color + " something!";
  }

  $('#generate').click(function(){
    madLibs();
  });
});
