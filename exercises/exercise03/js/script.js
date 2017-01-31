/*

It's Supposed To Look Like Shit

*/

// The total number of images we'll add to the page
// is going to be a random integer between 0 and 99
const TOTAL_IMAGES = randomIntegerInRange(0,10);
const AVAILABLE_IMAGES = 4;
const HIDE_DELAY = 2000;


$(document).ready(function() {
  var r = Math.random();
  if (r < 0.25) {
  }
  else if (r < 0.5) {
      setTimeout(function () {
      $('body').hide();
    },HIDE_DELAY);
  }
  else {
    messUpPage();
  }
});


function messUpPage() {
  $("#title").click(titleClicked);
  $('.line').each(function () {
    randomRotate($(this),-45,45);
  });

  for (var i = 0; i < TOTAL_IMAGES; i++) {
    var img = createRandomImage();
    $('body').append(img);
  }
}

function titleClicked() {
  randomRotate($(this),-20,20);
}

function createRandomImage() {

  var imageNumber = randomIntegerInRange(0,AVAILABLE_IMAGES);
  var imageSource = "images/image" + imageNumber + ".jpg";
  var imageX = randomIntegerInRange(0,$(document).width());
  var imageY = randomIntegerInRange(0,$(document).height());
  var img = $('<img class="image" src="' + imageSource + '">');

  img.css({
    top: imageY + 'px',
    left: imageX + 'px'
  });

  randomRotate(img,-30,30);
  return img;
}

function randomRotate(element,min,max) {
  rotation = randomIntegerInRange(min,max);

  element.css({
    "transform": "rotateZ(" + rotation + "deg)"
  });
}

function randomIntegerInRange(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
