'use strict';

const [firstBtn] = document.getElementsByTagName('button');
function alertWithMessage() {
  alert();
}
firstBtn.addEventListener('click', alertWithMessage);
//================

const p = document.getElementById('unique');

//================

const testPars = document.getElementsByClassName('test');

//================

const par = document.querySelector('article > p');
const pars = document.querySelectorAll('p');
const pasrs = document.getElementsByTagName('p');

