/*

Week 02 January 17 2017
Narrative and Times

*/

$(document).ready(function(){
  //greeting message
  var date = new Date().getHours();
  var greeting;
  var morning = ('Good morning, please enter the following:');
  var afternoon = ('Good afternoon, please enter the following:');
  var evening = ('Good evening, please enter the following:');

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
    var madLibs = function(){
    var adjective = document.getElementById("adjective").value;
    var color = document.getElementById("color").value;
    var animal = document.getElementById("animal").value;
    var verb = document.getElementById("verb").value;
    var adjective2 = document.getElementById("adjective2").value;
    var animal2 = document.getElementById("animal2").value;
    var space = ' '
    var story = "The " + adjective + space + color + space + animal + space + verb + " over the " + adjective2 + space + animal2 + '.';
    document.getElementById('story').innerHTML = story;
}


  $('#generate').click(function(){
    madLibs();
  });

  var modal = document.getElementById('modal');
  var btn = document.getElementById('generate');

  btn.onclick = function(){
    modal.style.display = "block";
  }
});
