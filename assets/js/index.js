'use strict';

const btn = document.querySelector('button');
const div = document.querySelector('#root');

const clickhandler = (e) => {
  console.dir(e.currentTarget);
};

btn.addEventListener('click', clickhandler, true);
div.addEventListener(
  'click',
  () => {
    console.log('одноразовый обратчик я');
  },
  {
    once: true,
  }
);
document.body.addEventListener('click', clickhandler);
window.addEventListener('click', clickhandler, {
  capture: true,
});
/* квадрат числа из инпута */