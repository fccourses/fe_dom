'use strict';

const cardContainer = document.getElementById('root');
const cards = data.map((place) => createPlaceCards(place));
cardContainer.append(...cards);

function createPlaceCards(place) {
  return createElement('li', { classNames: ['cardWrapper'] }, [
    createElement('article', { classNames: ['cardContainer'] }, [
      createImageWrapper(place),
      createElement('h3', { classNames: ['cardName'] }, [
        document.createTextNode(place.name || ''),
      ]),
      createElement('p', { classNames: ['cardDescription'] }, [
        document.createTextNode(place.description),
      ]),
    ]),
  ]);

  /*   const card = document.createElement('li');
  card.classList.add('cardWrapper');

  const container = document.createElement('article');
  container.classList.add('cardContainer');

  const name = document.createElement('h3');
  name.classList.add('cardName');
  name.append(document.createTextNode(place.name || ''));

  const description = document.createElement('p');
  description.classList.add('cardDescription');
  description.append(document.createTextNode(place.description));

  container.append(createImageWrapper(place), name, description);
  card.append(container); */
  // return card;
}

function createImageWrapper(place) {
  const { name, id } = place;

  const imageWrapper = document.createElement('div');
  imageWrapper.setAttribute('id', `wrapper${id}`);
  imageWrapper.classList.add('cardImageWrapper');
  imageWrapper.style.backgroundColor = stringToColour(name);

  const initials = document.createElement('div');
  initials.classList.add('initials');
  initials.append(document.createTextNode(name.trim().charAt(0) || ''));

  createImage(place, { className: 'cardImage' });

  imageWrapper.append(initials);
  return imageWrapper;
}

function createImage({ name, profilePicture, id }, { className }) {
  const img = document.createElement('img');
  img.classList.add(className);
  img.dataset.id = id;
  img.setAttribute('alt', name);
  img.setAttribute('src', profilePicture);
  img.addEventListener('error', handleImageError);
  img.addEventListener('load', handleImageLoad);
  return img;
}

/**
 *
 * @param {string} type
 * @param {object} options
 * @param {string[]} options.classNames - css classes
 * @param {function} options.onClick - click handler
 * @param {Node[]} children
 * @return {HTMLElement}
 */
function createElement(type, { classNames, onClick }, children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.onclick = onClick;
  elem.append(...children);
  return elem;
}

/* 
  EVENT HANDLERS
*/

function handleImageError({ target }) {
  target.remove();
}

function handleImageLoad({
  target,
  target: {
    dataset: { id },
  },
}) {
  document.getElementById(`wrapper${id}`).append(target);
}

/* 
  UTILS
*/

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}
