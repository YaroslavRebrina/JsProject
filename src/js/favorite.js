import { FAVORITE_KEY, FAVORITE_TOTAL, RENDERED } from './constants';
import { dataForFavorite } from './pagination/paginationByPopular';
import { card } from './card';

import sprite from '../fonts/images/icons.svg';
const refs = {
  listRef: document.querySelector('.card__list'),
  buttonRef: document.querySelector('.card__favorite'),
  favListRef: document.querySelector('.favorite__list'),
};
const { listRef, buttonRef, favListRef } = refs;

let favouriteNews = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
// let colletionTotal = JSON.parse(localStorage.getItem(FAVORITE_TOTAL)) || 0;

listRef.addEventListener('click', toggleFavorite);
// listRef.addEventListener('click', removeFavourite);

favoriteMarkup(getFavorites());

function toggleFavorite(evt) {
  if (
    evt.target.nodeName === 'BUTTON' &&
    !evt.target.classList.contains('liked')
  ) {
    addToFavourites(evt);
  } else {
    removeFavourite(evt);
  }
}

function addToFavourites(evt) {
  console.log(evt.target);
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

  addedToFavorite.isFavorite = true;
  favouriteNews.push(addedToFavorite);
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favouriteNews));
  console.log(favouriteNews);
  return;
}

function removeFavourite(evt) {
  console.log(evt.target);
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
  favouriteNews.filter(item => !addedToFavorite);
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

//closest or stop paitaintion if target `li`
