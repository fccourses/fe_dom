'use strict';

const btns = document.querySelectorAll('button');

for (const btn of btns) {
  btn.addEventListener(
    'click',
    ({
      target: {
        dataset: { address },
        dataset
      },
    }) => {
      console.dir(dataset.testKey);
      console.dir(dataset.className); // wrong
      console.dir(dataset.classname); // right
    }
  );
}
