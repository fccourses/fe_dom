'use strict';

const btns = document.querySelectorAll('button');

// Variant 1
/* for (const btn of btns) {
  btn.addEventListener(
    'click',
    ({
      target: {
        dataset: { color },
        parentNode: localDiv,
      },
    }) => {
      localDiv.style.backgroundColor = color;
    }
  );
} */

//Variant 2
const eventHandler = ({
  target: {
    dataset: { color },
    parentNode: localDiv,
  },
}) => {
  localDiv.style.backgroundColor = color;
};

for (const btn of btns) {
  btn.addEventListener('click', eventHandler);
}
