
var colorReverser = function() {
  console.log('colorReverser');
  // trouve l'élément à modifier 
  var nav = document.getElementById('main-nav');
  
  // Sets the color of navbar
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

    // hide show nav bar content based on scroll position
    new Waypoint.Inview({
      element: document.getElementById('quick-access'),
      enter: function(direction) {
          if (direction == 'up') {
            nav.classList.remove('is-nav-visible');
            console.log('Enter triggered with direction ' + direction);
          }
      }
      , exited: function(direction) {
          if (direction == 'down') {
            nav.classList.add('is-nav-visible');
            console.log('Exited triggered with direction ' + direction);
          }
      }
    });
  }

  // find active section and mark menu item

  var menuCompetiton = document.getElementById('nav-competition');
  
  if (menuCompetiton !== null ) {
    new Waypoint.Inview({
      element: document.getElementById('Competition'),
      // offset: '-100%',
      entered: function(direction) {
        if (direction == 'up') {
          menuCompetiton.classList.remove('is-current');
          // console.log('Entered triggered with direction ' + direction);
        }
      }
      , enter: function(direction) {
          if (direction == 'up') {
            menuCompetiton.classList.add('is-current');
            // console.log('Enter triggered with direction ' + direction);
          }
      }
      , exit: function(direction) {
          if (direction == 'down') {
            menuCompetiton.classList.add('is-current');
            // console.log('Exit triggered with direction ' + direction);
          }
      }
      , exited: function(direction) {
          if (direction == 'down') {
            menuCompetiton.classList.remove('is-current');
            // console.log('Exited triggered with direction ' + direction);
          }
      }
    });
  }


  var menuConcept = document.getElementById('nav-concept');
  
  if (menuConcept !== null ) {
    new Waypoint.Inview({
      element: document.getElementById('Concept'),
      // offset: '-100%',
      entered: function(direction) {
        if (direction == 'up') {
          menuConcept.classList.remove('is-current');
          // console.log('Entered triggered with direction ' + direction);
        }
      }
      , enter: function(direction) {
          if (direction == 'up') {
            menuConcept.classList.add('is-current');
            // console.log('Enter triggered with direction ' + direction);
          }
      }
      , exit: function(direction) {
          if (direction == 'down') {
            menuConcept.classList.add('is-current');
            // console.log('Exit triggered with direction ' + direction);
          }
      }
      , exited: function(direction) {
          if (direction == 'down') {
            menuConcept.classList.remove('is-current');
            // console.log('Exited triggered with direction ' + direction);
          }
      }
    });
  }


  var menuAbout = document.getElementById('nav-about');
  
  if (menuAbout !== null ) {
    new Waypoint.Inview({
      element: document.getElementById('About'),
      // offset: '-100%',
      entered: function(direction) {
        if (direction == 'up') {
          menuAbout.classList.remove('is-current');
          // console.log('Entered triggered with direction ' + direction);
        }
      }
      , enter: function(direction) {
          if (direction == 'up') {
            menuAbout.classList.add('is-current');
            // console.log('Enter triggered with direction ' + direction);
          }
      }
      , exit: function(direction) {
          if (direction == 'down') {
            menuAbout.classList.add('is-current');
            // console.log('Exit triggered with direction ' + direction);
          }
      }
      , exited: function(direction) {
          if (direction == 'down') {
            menuAbout.classList.remove('is-current');
            // console.log('Exited triggered with direction ' + direction);
          }
      }
    });
  }
};