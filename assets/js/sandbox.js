'use strict';

/**
 * @return {object}
 */
function makeCounter() {
  let count = 0; // замкнутая переменная инкапсулирована
  return {
    increment() {
      return ++count;
    },
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();
