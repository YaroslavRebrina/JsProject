import { FAVORITE_KEY, FAVORITE_TOTAL, RENDERED } from './constants';
import { dataForFavorite } from './pagination/paginationByPopular';
import { card } from './card';

const refs = {
  listRef: document.querySelector('.card__list'),
  buttonRef: document.querySelector('.card__favorite'),
  favListRef: document.querySelector('.favorite__list'),
};
const { listRef, buttonRef, favListRef } = refs;

let favouriteNews = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
// let colletionTotal = JSON.parse(localStorage.getItem(FAVORITE_TOTAL)) || 0;

listRef.addEventListener('click', addToFavourites);
// listRef.addEventListener('click', removeFavourite);

favoriteMarkup(getFavorites());

function addToFavourites(evt) {
  if (evt.target.nodeName === 'BUTTON' || 'USE' || 'SPAN') {
    console.log(evt.target);
    const addedToFavorite = JSON.parse(localStorage.getItem(RENDERED)).find(
      item => item.id === evt.target.closest('li').id
    );

    addedToFavorite.isFavorite = true;
    favouriteNews.push(addedToFavorite);
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favouriteNews));
    console.log(favouriteNews);
  }
}

function removeFavourite(evt) {
  if (evt.target.nodeName === 'BUTTON') {
    if (dataForFavorite === null) {
      // dataForFavorite = ;
    }
    const addedToFavorite = JSON.parse(localStorage.getItem(RENDERED)).find(
      item => item.id === evt.target.closest('li').id
    );
    addedToFavorite.isFavorite = false;
    favouriteNews.filter(item => !addedToFavorite);
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favouriteNews));
    console.log(favouriteNews);
    favoriteMarkup(getFavorites());
  }
}

//auto markup

function getFavorites() {
  try {
    return favouriteNews;
  } catch (e) {}
}

function favoriteMarkup(callback) {
  const items = callback.map(item => card(item)); //markup

  try {
    listRef.innerHTML = items;
  } catch (error) {
    console.log(error.message);
  }
}

//closest or stop paitaintion if target `li`
