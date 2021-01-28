'use strict';

const form = document.getElementById('root-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target: { email },
  } = e; // target === form;
  
  console.dir(email.value);
});
