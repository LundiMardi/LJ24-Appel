
var colorReverser = function() {
  console.log('colorReverser');
  // trouve l'élément à modifier 
  var nav = document.getElementById('main-nav');
  
  if (nav !== null ) {
    var menuColorReverser = new Waypoint.Inview({
      element: document.getElementById('About'),
      // context: document.getElementById('main-nav'),
      // offset: '-100%',
      entered: function(direction) {
        if (direction == 'up') {
          nav.classList.remove('context-blue');
          // console.log('Entered triggered with direction ' + direction);
        }
      }
      , enter: function(direction) {
          if (direction == 'up') {
            nav.classList.add('context-blue');
            // console.log('Enter triggered with direction ' + direction);
          }
      }
      , exit: function(direction) {
          if (direction == 'down') {
            nav.classList.add('context-blue');
            // console.log('Exit triggered with direction ' + direction);
          }
      }
      , exited: function(direction) {
          if (direction == 'down') {
            nav.classList.remove('context-blue');
            // console.log('Exited triggered with direction ' + direction);
          }
      }
    });
  }

  // find active section and mark menu item

  var nav1 = document.getElementById('nav-competition');
  
  if (nav1 !== null ) {
    new Waypoint.Inview({
      element: document.getElementById('Competition'),
      // offset: '-100%',
      entered: function(direction) {
        if (direction == 'up') {
          nav1.classList.remove('is-current');
          console.log('Entered triggered with direction ' + direction);
        }
      }
      , enter: function(direction) {
          if (direction == 'up') {
            nav1.classList.add('is-current');
            console.log('Enter triggered with direction ' + direction);
          }
      }
      , exit: function(direction) {
          if (direction == 'down') {
            nav1.classList.add('is-current');
            console.log('Exit triggered with direction ' + direction);
          }
      }
      , exited: function(direction) {
          if (direction == 'down') {
            nav1.classList.remove('is-current');
            console.log('Exited triggered with direction ' + direction);
          }
      }
    });
  }


  var nav2 = document.getElementById('nav-concept');
  
  if (nav2 !== null ) {
    new Waypoint.Inview({
      element: document.getElementById('Concept'),
      // offset: '-100%',
      entered: function(direction) {
        if (direction == 'up') {
          nav2.classList.remove('is-current');
          console.log('Entered triggered with direction ' + direction);
        }
      }
      , enter: function(direction) {
          if (direction == 'up') {
            nav2.classList.add('is-current');
            console.log('Enter triggered with direction ' + direction);
          }
      }
      , exit: function(direction) {
          if (direction == 'down') {
            nav2.classList.add('is-current');
            console.log('Exit triggered with direction ' + direction);
          }
      }
      , exited: function(direction) {
          if (direction == 'down') {
            nav2.classList.remove('is-current');
            console.log('Exited triggered with direction ' + direction);
          }
      }
    });
  }


  var nav3 = document.getElementById('nav-about');
  
  if (nav3 !== null ) {
    new Waypoint.Inview({
      element: document.getElementById('About'),
      // offset: '-100%',
      entered: function(direction) {
        if (direction == 'up') {
          nav3.classList.remove('is-current');
          console.log('Entered triggered with direction ' + direction);
        }
      }
      , enter: function(direction) {
          if (direction == 'up') {
            nav3.classList.add('is-current');
            console.log('Enter triggered with direction ' + direction);
          }
      }
      , exit: function(direction) {
          if (direction == 'down') {
            nav3.classList.add('is-current');
            console.log('Exit triggered with direction ' + direction);
          }
      }
      , exited: function(direction) {
          if (direction == 'down') {
            nav3.classList.remove('is-current');
            console.log('Exited triggered with direction ' + direction);
          }
      }
    });
  }
};