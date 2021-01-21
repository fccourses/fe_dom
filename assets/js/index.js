'use strict';

let i = 0;

const [firstBtn] = document.getElementsByTagName('button');

function alertWithMessage() {
  alert('Achievement Unlocked!');
}

firstBtn.addEventListener('click', alertWithMessage);
