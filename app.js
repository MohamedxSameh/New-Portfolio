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

// WELCOME PAGE
let welcomeContainer = document.querySelector('.welcome-container');
let welcome = document.querySelector('.welcome');
let boxes = document.querySelectorAll('.box');
let text = document.querySelectorAll('.welcome-text');
let mainText = document.querySelector('.main-text');

let helloArray = ['hello', 'مرحباً', 'bonjour', 'hola', 'ciao'];
let i = 0;
// CHANGING TEXT ON WELCOME PAGE
let changeHello = setInterval(() => {
  if (i > helloArray.length - 1) {
    i = 0;
  }
  text.forEach(text => {
    text.innerHTML = helloArray[i];
  });
  i++;
}, 1200);

// MOVING WELCOME PAGE ON SCROLL
let scroll = () => {
  if (pageYOffset > 0) {
    mainText.style.display = 'none';
    welcomeContainer.style.backgroundColor = 'transparent';
  } else {
    mainText.style.display = 'block';
    welcomeContainer.style.backgroundColor = 'white';
  }
  boxes.forEach((element, index) => {
    let rate = element.dataset.rate * pageYOffset;
    if (-100 < rate && rate < 100) {
      element.style.transform = `translate3d(0,${rate}%,0)`;
    } else {
      rate = index === 0 ? '-100' : '100';
      element.style.transform = `translate3d(0,${rate}%,0)`;
      welcomeContainer.style.display = 'none';
      clearInterval(changeHello);
    }
  });
};
window.addEventListener('scroll', scroll);
