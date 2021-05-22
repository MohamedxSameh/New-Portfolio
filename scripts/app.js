// HEADER
// NAV MENU
let menuIcon = document.querySelector('.icon');
let navMenu = document.querySelector('.nav-menu');
let menu = document.querySelector('.menu');
let pageContainer = document.querySelector('.page-container');
let menuClosed = true;

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('opened');
  if (menuClosed) {
    // Open menu
    pageContainer.style.overflowY = 'hidden';
    navMenu.classList.remove('nav-menu-close');
    setTimeout(() => {
      navMenu.classList.add('nav-menu-open');
    }, 10);
    setTimeout(() => {
      menu.style.display = 'block';
    }, 400);
    menuClosed = false;
  } else {
    // Close menu
    pageContainer.style.overflowY = 'scroll';
    navMenu.classList.remove('nav-menu-open');
    menu.style.display = 'none';
    setTimeout(() => {
      navMenu.classList.add('nav-menu-close');
    }, 400);
    menuClosed = true;
  }
});
