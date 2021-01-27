'use strict';

const cardContainer = document.getElementById('root');

const HTMLLIElements = data.map((place) => createPlaceCards(place));

cardContainer.append(...HTMLLIElements);

function createPlaceCards(place) {
  const card = document.createElement('li');
  card.classList.add('cardWrapper');

  const container = document.createElement('article');
  container.classList.add('cardContainer');

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('cardImageWrapper');
  imageWrapper.style.backgroundColor = stringToColour(place.name);

  const initials = document.createElement('div');
  initials.classList.add('initials');
  initials.append(document.createTextNode(place.name[0] || ''));

  const img = document.createElement('img');
  img.classList.add('cardImage');
  img.setAttribute('alt', place.name);
  img.setAttribute('src', place.profilePicture);

  img.addEventListener('error', handleImageError);

  imageWrapper.append(initials, img);

  const name = document.createElement('h3');
  name.classList.add('cardName');
  // name.textContent = place.name;
  name.append(document.createTextNode(place.name || ''));

  const description = document.createElement('p');
  description.classList.add('cardDescription');
  description.append(document.createTextNode(place.description));

  container.append(imageWrapper, name, description);
  card.append(container);
  return card;
}

/* 

  EVENT HANDLERS

*/

function handleImageError({ target }) {
  target.remove();
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
