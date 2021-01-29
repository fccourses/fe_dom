'use strict';

function sum(a, b) {
  console.log(this);
  // return a+b;
}

sum(1, 1);

const sumWithContext = sum.bind(document.createElement('li'));

sumWithContext(1, 1);
