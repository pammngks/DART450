/*

Play Array

*/

$(document).ready(function(){


var myArray = ["world", "universe", "person"];
var myIndex = 1;
var print = document.getElementById('print');

print.innerHTML = myArray[0]; // display first value of array

$('#click').click(function (){ // trigger nextElement function on click
  nextElement();
})

function nextElement() {
   print.innerHTML = myArray[myIndex];
   myIndex = (myIndex+1)%(myArray.length); // remaining array values
};

});
