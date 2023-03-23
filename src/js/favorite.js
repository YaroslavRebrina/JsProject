import { FAVORITE_KEY, FAVORITE_TOTAL } from './constants';

const refs = {
  listRef: document.querySelector('.favorite__list'),
};
const { listRef } = refs;

let favouriteNews = localStorage.getItem(FAVORITE_KEY) || [];
let colletionTotal = JSON.parse(localStorage.getItem(FAVORITE_TOTAL)) || 0;

favoriteMarkup(getFavorites());

// functions

//add event listener to butt
function addToFavourites(evt) {
  evt.target.dataset.id = colletionTotal + 1;
  evt.target.dataset.favorite = evt.target.innerHTML;
  colletionTotal += 1;

  favouriteNews.push(evt.target.dataset.favorite);
  localStorage.setItem(FAVORITE_KEY, favouriteNews);
  localStorage.setItem(FAVORITE_TOTAL, colletionTotal);
}

function removeFavourite(evt) {
  favouriteNews = favouriteNews.filter(
    item => !item.include(evt.target.dataset.id)
  );
  localStorage.setItem(favouriteNews);
  return favoriteMarkup(getFavorites());
}

//auto markup

function getFavorites() {
  try {
    // const favoriteItems = localStorage.getItem(FAVORITE_KEY);
    return JSON.parse(favouriteNews);
  } catch (e) {
    console.log(console.log(e));
  }
}

function favoriteMarkup(callback) {
  const items = callback;

  const markup = items.join('');
  listRef.innerHTML = markup;
}

//closest or stop paitaintion if target `li`
