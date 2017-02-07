/*

Play Array

*/


document.addEventListener( "click", function toggleWords (event) {

    var target = event.target, values = [], placed;

    if ( target.hasAttribute("data-values") ) {
        values = target.getAttribute("data-values").split(",");
        placed = values.indexOf(target.textContent);
        target.textContent = values[++placed % values.length];
      }
      
  });
