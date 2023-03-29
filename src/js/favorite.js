import { FAVORITE_KEY, FAVORITE_TOTAL, RENDERED } from './constants';
// import { dataForFavorite } from './pagination/paginationByPopular';
import { card } from './card';

import sprite from '../fonts/images/icons.svg';
const refs = {
  listRef: document.querySelector('.card__list'),
  buttonRef: document.querySelector('.card__favorite'),
  favListRef: document.querySelector('.favorite__list'),
};
const { listRef, buttonRef, favListRef } = refs;

export let favouriteNews = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
// let colletionTotal = JSON.parse(localStorage.getItem(FAVORITE_TOTAL)) || 0;
try {
  listRef.addEventListener('click', toggleFavorite);
} catch (error) {
  console.log(error.message);
}

favoriteMarkup(getFavorites());

function toggleFavorite(evt) {
  if (evt.target.nodeName === 'BUTTON')
    if (!evt.target.classList.contains('liked')) {
      addToFavourites(evt);
    } else {
      removeFavourite(evt);
    }

  if (evt.target.classList.contains('card__read')) {
    addToReads(evt);
  }
}

function addToReads(evt) {
  const addedToRead = JSON.parse(localStorage.getItem(RENDERED)).find(
    item => item.id === evt.target.closest('li').id
  );
  const elemOpacity = evt.target.closest('li');
  elemOpacity.classList.add('card--opacity');

  const elem = evt.target.closest('li').querySelector('.card__already');

  elem.classList.remove('card__already--false');

  let searchBool = false;

  favouriteNews.forEach(item => {
    if (item.id === addedToRead.id) {
      item.isRead = true;
      searchBool = true;
    }
  });

  if (!searchBool) {
    addedToRead.isRead = true;
    favouriteNews.push(addedToRead);
  }

  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favouriteNews));

  return;
}

function addToFavourites(evt) {
  const addedToFavorite = JSON.parse(localStorage.getItem(RENDERED)).find(
    item => item.id === evt.target.closest('li').id
  );

  evt.target.closest(
    'button'
  ).innerHTML = `<span class="span--test"> Remove from favorite
        <svg width="16" height="16" class="box__icon remove-icon">
          <use href="${sprite}#icon-like-active"></use>
        </svg>
      </span>`;

  evt.target.classList.add('liked');

  let searchBool = false;

  favouriteNews.forEach(item => {
    if (item.id === addedToFavorite.id) {
      item.isFavorite = true;
      searchBool = true;
    }
  });

  if (!searchBool) {
    addedToFavorite.isFavorite = true;
    favouriteNews.push(addedToFavorite);
  }

  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favouriteNews));

  return;
}

function removeFavourite(evt) {
  const addedToFavorite = JSON.parse(localStorage.getItem(RENDERED)).find(
    item => item.id === evt.target.closest('li').id
  );
  evt.target.closest('button').innerHTML = `<span class="span--test">
      Add to favorite
        <svg  width="16" heigth="16">
          <use href="${sprite}#icon-like-nonactive"></use>
        </svg>
      </span>`;
  evt.target.classList.remove('liked');
  addedToFavorite.isFavorite = false;

  favouriteNews.forEach(item => {
    if (item.id != addedToFavorite.id) return;

    item.isFavorite = addedToFavorite.isFavorite;
  });

  favouriteNews = favouriteNews.filter(
    item => item.isFavorite === true || item.isRead === true
  );

  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favouriteNews));

  if (document.body.classList.contains('favorite')) {
    favoriteMarkup(getFavorites());
  }
}

//auto markup

export function getFavorites() {
  try {
    return favouriteNews;
  } catch (e) {
    console.log(error.message);
  }
}

export function favoriteMarkup(callback) {
  const items = callback.map(item => card(item)); //markup

  try {
    listRef.innerHTML = items;
  } catch (error) {
    console.log(error.message);
  }
}
