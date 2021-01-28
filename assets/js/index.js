'use strict';

const form = document.getElementById('root-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { target } = event; // target === form
  console.dir(target);
});

document.body.addEventListener('click', (e) => {
  e.stopPropagation(); // отмена всплытия события
  console.dir('click body');
});

window.addEventListener('click', (e) => {
  console.dir('click window');
});
