/* global goku */

(function () {
  'use strict';

  var bubbleButton = document.getElementById('show-bubbles');

  bubbleButton.addEventListener('click', function () {
    var bubbles = document.querySelectorAll('.bubble');

    for (var i = 0; i < bubbles.length; i++) {
      if (i > 0) {
        goku(bubbles[i])
        .delay(i * 200)
        .animate({
          transform: 'none',
          opacity: 1
        });
      } else {
        goku(bubbles[i])
        .animate({
          transform: 'none',
          opacity: 1
        });
      }
    }
  });
})(window);
