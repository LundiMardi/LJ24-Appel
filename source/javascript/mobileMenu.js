const mobileMenu = function() {

  const navButtonOpen = document.getElementById('bt-mobile-menu') ;
  const navButtonHide = document.getElementById('bt-mobile-menu-hide');
  const menuElement = document.getElementById('mobile-menu');
  const metaTheme = document.querySelector('meta[name="theme-color"]');


  // openning the menu
  navButtonOpen.addEventListener('click', event => {
    menuElement.classList.remove('mobile-menu__is-closed');
    navButtonOpen.classList.remove('mobile-menu__is-closed');
    navButtonHide.classList.remove('mobile-menu__is-closed');
    metaTheme.setAttribute("content", "#5637ff");
  });
  
  function onCloseMenu() {
    menuElement.classList.add('mobile-menu__is-closed');
    navButtonOpen.classList.add('mobile-menu__is-closed');
    navButtonHide.classList.add('mobile-menu__is-closed');
    metaTheme.setAttribute("content", "#76fc21");
  }
  
  // closing the menu
  menuElement.addEventListener('click', event => {

    onCloseMenu()
  });
  
  navButtonHide.addEventListener('click', event => {
    onCloseMenu()
    // menuElement.classList.add('mobile-menu__is-closed');
    // navButtonOpen.classList.add('mobile-menu__is-closed');
    // navButtonHide.classList.add('mobile-menu__is-closed');
    // metaTheme.setAttribute("content", "#5637ff");
  });

}