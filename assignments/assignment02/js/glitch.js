/*

Script for glitch states -

Pam Menegakis

*/

// FUNCTION: Keep track of the page clicks in order to destruct elements
function pageGlitch() {
  // Set initial count to 0
  var pageCount = 0;
  // Run the function every time the user clicks anywhere in the page
  $(document).click(function(){
    // Each time a click is generated, add it to the count
    pageCount++;
    // Various if statements to render the page 'difficult' to use
    if (pageCount == 50){
      // Expose a class that will turn the page black with external css styling
      $('.glitch').fadeIn('fast');
      console.log('Error has been established.');
    }

    if (pageCount == 20){
        // Expose a class that will shake each div element
        $('div').addClass('shake');
        console.log('The page is shaking.');
    }

    if (pageCount == 22) {
      $('div').addClass('shake-2');
      console.log('The page is shaking some more.');
    }

    if (pageCount == 24) {
      // Go through each div on the page
      $('div').each(function(){
        // Select a random location anywhere within the window
        var x = $(window).width() * Math.random();
        var y = $(window).height() * Math.random();
        // Set the current div's CSS to put it at a random location
        $(this).css({
          position: 'absolute',
          top: y + 'px',
          left: x + 'px'});
          $(this).removeClass('shake');
        $(this).draggable();
        });
      };
    });
  };
