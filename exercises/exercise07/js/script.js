/*

Exercise 07: Scrooooooooooooooolling
Pam Menegakis


*/


$(document).ready(function() {

$('.scrollReveal h1').addClass('active');

//Create a ScrollMagic controller so we can use the library
var controller = new ScrollMagic.Controller();

var tween = new TimelineMax();

tween.add([

// Start with invisible text
  TweenMax.from(".scrollReveal h1", 0.5, {
    opacity: 0,
    x: 0,
    ease: Back.ease
  }),

// Increase opacity to 1 during the tween
  TweenMax.to(".scrollReveal h1", 0.5, {
    opacity: 1,
    x: 10, // Make text move along the x axis
    ease: Back.ease
  })
]);

// Create a scene for the text and give it a large duration so that when you scroll the text eases in slowly
var scene = new ScrollMagic.Scene({
    duration: 10000
  })

  .setTween(tween)
// Pin .scrollReveal to controller
  .setPin(".scrollReveal")
  .addTo(controller);


});
