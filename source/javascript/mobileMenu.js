const mobileMenu = function() {

  const navButtonOpen = document.getElementById('bt-mobile-menu') ;
  const navButtonHide = document.getElementById('bt-mobile-menu-hide');
  const menuElement = document.getElementById('mobile-menu');

  // openning the menu
  navButtonOpen.addEventListener('click', event => {
    menuElement.classList.remove('mobile-menu__is-closed');
    navButtonOpen.classList.remove('mobile-menu__is-closed');
    navButtonHide.classList.remove('mobile-menu__is-closed');
  });


  
  // closing the menu
  menuElement.addEventListener('click', event => {
    menuElement.classList.add('mobile-menu__is-closed');
    navButtonOpen.classList.add('mobile-menu__is-closed');
    navButtonHide.classList.add('mobile-menu__is-closed');
  });

  navButtonHide.addEventListener('click', event => {
    menuElement.classList.add('mobile-menu__is-closed');
    navButtonOpen.classList.add('mobile-menu__is-closed');
    navButtonHide.classList.add('mobile-menu__is-closed');
  });

}