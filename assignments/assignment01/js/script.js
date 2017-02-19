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

// on folder click open restricted access pop up


});
