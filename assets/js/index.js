'use strict';

const btns = document.querySelectorAll('button');

for (const btn of btns) {
  btn.addEventListener(
    'click',
    ({
      target: {
        dataset: { address },
      },
    }) => {
      console.dir(address);
    }
  );
}
