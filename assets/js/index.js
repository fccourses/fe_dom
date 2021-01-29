'use strict';
/* TODO list */
const state = [];

const form = document.getElementById('root-form');
const list = document.getElementById('root-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target,
    target: {
      todo: { value: rawTodoInput },
    },
  } = e; // target === form;

  const inputValue = rawTodoInput.trim();
  /* Валидация значения в инпуте при сабмите формы */
  if (inputValue) {
    /* При каждом сабмите формы - пушить значение инпута в массив */
    state.push(inputValue);

    /* Рендерить на странице то, что было введено в форму */
    const li = createListElement(inputValue);
    list.append(li);
  }
  /* Очищать форму после каждого сабмита */
  target.reset();
});

function createListElement(inputValue) {
  const li = document.createElement('li');
  const liContent = document.createTextNode(inputValue);

  li.append(liContent, createDeleteButton(deleteHandler.bind(li), inputValue));
  return li;
}

function createDeleteButton(onDelete, inputValue) {
  const btn = document.createElement('button');
  btn.dataset.value = inputValue;
  btn.textContent = 'X';
  btn.addEventListener('click', onDelete);
  return btn;
}

function deleteHandler(e) {
  const {
    target: {
      dataset: { value },
    },
  } = e;
  
  this.remove(); // fix 1
  state.splice(state.indexOf(value), 1);
}

/*
   Кнопка удаления у li - удаляет элемент со стрн и
   его значение из массива 

   1. Удаление li со страницы
   2. Удаление Значения из массива
*/
