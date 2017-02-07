/*

Responsive Voice

*/

$(document).ready(function() {

$(document).click(function() { // on page click
  responsiveVoice.speak("How you doing?","US English Male",{pitch:0.01, rate:0.5});
});
});
