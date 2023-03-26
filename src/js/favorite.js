import { FAVORITE_KEY, FAVORITE_TOTAL } from './constants';

const refs = {
  listRefHome: document.querySelector('.card__list'),
  listRef: document.querySelector('.favorite__list'),
  buttonRef: document.querySelector('.card__favorite'),
};
const { listRef, buttonRef, listRefHome } = refs;

let favouriteNews = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
let colletionTotal = JSON.parse(localStorage.getItem(FAVORITE_TOTAL)) || 0;

const regexpOpener = `<li>`;
const regexpCloser = `</li>`;

listRefHome.addEventListener('click', addToFavourites);

function addToFavourites(evt) {
  if (!evt.composedPath().includes(buttonRef)) {
    return;
  }
  let liRef = evt.target.closest('li');

  liRef.dataset.id = colletionTotal + 1;
  liRef.dataset.favorite = liRef.innerHTML;
  colletionTotal += 1;
  favouriteNews.push(`${regexpOpener}${liRef.dataset.favorite}${regexpCloser}`);

  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favouriteNews));
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
    return JSON.parse(favouriteNews);
  } catch (e) {
    console.log(console.log(e.message));
  }
}

function favoriteMarkup(callback) {
  const items = callback.map(item => {}); //markup

  const markup = items.join('');
  try {
    listRef.innerHTML = markup;
  } catch (error) {
    console.log(error.message);
  }
}
