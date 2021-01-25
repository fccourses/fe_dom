'use strict';

/* 
Поменять местами содержимое 
двух кнопок по наведению.
*/
const [closeBtn, openBtn] = document.querySelectorAll('button');

const switcher = ({ target }) => {
  const closeElem = target === closeBtn ? closeBtn : openBtn;
  const openElem = target === closeBtn ? openBtn : closeBtn;

  const closeText = closeElem.textContent;
  closeElem.textContent = openElem.textContent;
  openElem.textContent = closeText;

  closeElem.removeEventListener('mouseenter', switcher);
  openElem.addEventListener('mouseenter', switcher);
};

const clickHandler = ({ target: { textContent } }) => {
  alert(textContent);
};

closeBtn.addEventListener('mouseenter', switcher);

closeBtn.addEventListener('click', clickHandler);
openBtn.addEventListener('click', clickHandler);
