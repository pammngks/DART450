// Surveillance

window.onload = function (){  // set variables to get elements
  var video = document.getElementById('video');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d'); // render context as 2D

  var tracker = new tracking.ObjectTracker(['face', 'eye','mouth']); // create tracking object for face, eye, and mouth
  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);

  tracking.track('#video', tracker, { camera: true }); // get webcam

  tracker.on('track', function(event) {
    context.clearRect(0, 0, canvas.width, canvas.height); // clear rectangle off the canvas

    event.data.forEach(function(rect) {
      context.strokeStyle = '#55ff55'; // stroke color
      context.strokeRect(rect.x, rect.y, rect.width, rect.height); // draw rectangle when tracking objects are found
      context.font = '10px Helvetica'; // text size
      context.fillStyle = "#55ff55"; // text color
      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11); // display coordinates in pixels
      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
    });
  });

};
