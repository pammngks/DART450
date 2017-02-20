/*

Assignment 01: Interactive Personality
Pam Menegakis
February 2017

*/

// Display date and time in taskbar

$(document).ready(function(){

  var currentDate = new Date (); // returns current date
  var hours = currentDate.getHours(); // returns the hour (0-23)
  var minutes = currentDate.getMinutes(); // returns the minutes (0-59)

    if (minutes < 10) {
     minutes = "0" + minutes; // add 0 to minutes if less than 10
    }

  var suffix = "AM";
    if (hours >= 12) {
      suffix = "PM"; // if hour is greater or equal to 12, display PM
      hours = hours - 12; // display time in 12 hour format
    }
    if (hours == 0) {
     hours = 12;
    }

  document.getElementById('date').innerHTML=currentDate.toDateString() + " " + hours + ":" + minutes + " " + suffix; // display above variables in #date

// responsive voice on click of folder
$('#folder').click (function(){
  responsiveVoice.speak("restricted", "US English Male",{pitch: 0.5, rate: 1});
});

// change color on refresh
var imgColours = ['#b7d3f9', '#f6525f', '#ADE3D6'];

for (var i=0; i < imgColours.length; i++) {
    $('.img:eq('+i+')').css({backgroundColor: imgColours[i]});
}

var $imgs = $('#illustrator').find('.box'),
    imgsCount = $imgs.length,
    coloursCount = imgColours.length;

for (var i=0; i < imgsCount; i++) {
    var rnd = Math.floor(Math.random() * coloursCount),
        color = imgColours[rnd];
    $imgs.eq(i).css({backgroundColor: color});
}



// spotify responsive voice
$('#music').click(function(){
  responsiveVoice.speak("boom boom boom boom", "UK English Male");
});
//music


});
