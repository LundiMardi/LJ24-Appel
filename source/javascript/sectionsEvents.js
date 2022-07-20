
var colorReverser = function() {

  // trouve l'élement à modifier 
  var nav = document.getElementById("main-nav");
  
  if (nav !== null ) {
    // Play on window enter
    var menuColorReverser = new Waypoint.Inview({
      element: document.getElementById('About'),
      // context: document.getElementById('main-nav'),
      // offset: '-100%',
      entered: function(direction) {
        if (direction == 'up') {
          nav.classList.remove('context-blue');
          console.log('Entered triggered with direction ' + direction);
        }
      }
      , enter: function(direction) {
          if (direction == 'up') {
            nav.classList.add('context-blue');
            console.log('Enter triggered with direction ' + direction);
          }
      }
      , exit: function(direction) {
          if (direction == 'down') {
            nav.classList.add('context-blue');
            console.log('Exit triggered with direction ' + direction);
          }
      }
      , exited: function(direction) {
          if (direction == 'down') {
            nav.classList.remove('context-blue');
            console.log('Exited triggered with direction ' + direction);
          }
      }
    });
  }
};