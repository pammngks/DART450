/*

Play Array

*/

$(document).ready(function(){


var myArray = ["world", "universe", "person"];
var myIndex = 1;
var print = document.getElementById('print');

print.innerHTML = myArray[0];

$('#click').click(function (){
  nextElement();
})

function nextElement() {
   print.innerHTML = myArray[myIndex];
   myIndex = (myIndex+1)%(myArray.length);
};

});
