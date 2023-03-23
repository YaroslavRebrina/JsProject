import { FAVORITE_KEY } from './constants';

localStorage.setItem(FAVORITE_KEY, '1');

function getFavorites() {
  const favoriteItems = localStorage.getItem(FAVORITE_KEY);
  return JSON.stringify(favoriteItems);
}

function favoriteMarkup() {
  const items = getFavorites();
  console.log(items);
}
