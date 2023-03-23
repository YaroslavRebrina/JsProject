import { FAVORITE_KEY } from './constants';
import favoriteItemMarkup from '../templates/favorites.hbs';

const refs = {
  listRef: document.querySelector('.favorite__list'),
};

const { listRef } = refs;

localStorage.setItem(
  FAVORITE_KEY,
  JSON.stringify([
    {
      img: 'src',
      title: 'title',
      text: 'text',
      date: 'date',
      linl: 'link',
    },
  ])
);

function getFavorites() {
  const favoriteItems = localStorage.getItem(FAVORITE_KEY);
  return JSON.parse(favoriteItems);
}

function favoriteMarkup(callback) {
  const items = callback;

  let markup = items.map(favoriteItemMarkup).join('');
  listRef.insertAdjacentHTML = markup;
}

favoriteMarkup(getFavorites());
