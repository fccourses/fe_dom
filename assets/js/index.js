'use strict';

const btns = document.querySelectorAll('button');

for (const btn of btns) {
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
}
/* 1.1 По клику на кнопку менять bgColor у div#root */
/* 1.2 без глобальных переменных */

// Изменение стиля в html
/* elt.style.color = 'blue' */
/* elt.style = "color: blue;" */
