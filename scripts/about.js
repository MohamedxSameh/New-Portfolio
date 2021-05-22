let text = document.querySelector('.page-title');
let textContainer = document.querySelector('.page-title-wrapper');
let content = document.querySelector('.page-container');
let minTextFont = 100;
let textFont = getComputedStyle(text).getPropertyValue('font-size');
let maxTextPos = text.getBoundingClientRect().y;
content.style.display = 'none';
const scroll = () => {
  // FOR SMALL SCREENS
  if (innerWidth < 1024) {
    if (pageYOffset < 300) {
      let opacityRate = 1 / 300;
      let opacity = 1 - pageYOffset * opacityRate;
      text.style.opacity = `${opacity}`;
    } else {
      textContainer.style.display = 'none';
      content.style.display = 'block';
    }
  } else {
    // TEXT POSITION
    if (pageYOffset < 400) {
      let posRate = (maxTextPos - 64) / 400;
      let textPos = maxTextPos - pageYOffset * posRate;
      text.style.transform = `translate(0,${textPos}px)`;

      // TEXT FONT
      let fontRate = (parseInt(textFont) - 100) / 400;
      let newFont = parseInt(textFont) - pageYOffset * fontRate;
      text.style.fontSize = `${newFont}px`;
    } else {
      textContainer.style.display = 'none';
      content.style.display = 'block';
    }
  }
};
window.addEventListener('scroll', scroll);
