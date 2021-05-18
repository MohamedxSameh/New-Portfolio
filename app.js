let menuIcon = document.querySelector('.icon');
let navMenu = document.querySelector('.nav');
let items = document.querySelectorAll('.item');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('opened');
  navMenu.classList.toggle('active');
});
