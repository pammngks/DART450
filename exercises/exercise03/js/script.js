/*

It's Supposed To Look Like Shit

*/

$(document).ready(function() {

  const NUM_RANDOM_CIRCLES = 100;

  var circPosition = {
    x: 100,
    y: 100
  }

  var circ = circle(circPosition.x,circPosition.y);

  $('body').append(circ);

  for (var i = 0; i < NUM_RANDOM_CIRCLES; i++) {
    var x = Math.random() * $(document).width();
    var y = Math.random() * $(document).height();
    var r = circle(x,y);
    $('body').append(r);
  }
});

function circle (x, y) {
  var circ = $('<div></div>'); 
  circ.css({ 
    position: 'absolute',
    width: '20px',
    height: '20px', 
    top: y + 'px',
    left: x + 'px', 
    backgroundColor: 'rgba(246, 106, 106, 0.83)',
    borderRadius: '50%'
  }); 

  return circ;
}
