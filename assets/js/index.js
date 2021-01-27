'use strict';

const cardContainer = document.getElementById('root');
const cards = data.map((place) => createPlaceCards(place));
cardContainer.append(...cards);

function createPlaceCards(place) {
  const card = document.createElement('li');
  card.classList.add('cardWrapper');

  const container = document.createElement('article');
  container.classList.add('cardContainer');

  const name = document.createElement('h3');
  name.classList.add('cardName');
  // name.textContent = place.name;
  name.append(document.createTextNode(place.name || ''));

  const description = document.createElement('p');
  description.classList.add('cardDescription');
  description.append(document.createTextNode(place.description));

  container.append(createImageWrapper(place), name, description);
  card.append(container);
  return card;
}

function createImageWrapper(place) {
  const { name } = place;

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('cardImageWrapper');
  imageWrapper.style.backgroundColor = stringToColour(name);

  const initials = document.createElement('div');
  initials.classList.add('initials');
  initials.append(document.createTextNode(name[0] || ''));

  createImage(place, { className: 'cardImage' });

  imageWrapper.append(initials);
  return imageWrapper;
}

function createImage({ name, profilePicture }, { className }) {
  const img = document.createElement('img');
  img.hidden = true;
  img.classList.add(className);
  img.setAttribute('alt', name);
  img.setAttribute('src', profilePicture);
  img.addEventListener('error', handleImageError);
  img.addEventListener('load', handleImageLoad);
  return img;
}

/* 

  EVENT HANDLERS

*/

function handleImageError({ target }) {
  target.remove();
}

function handleImageLoad(e) {
  /* 
    append img 
  */
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
