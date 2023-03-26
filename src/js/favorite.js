import { FAVORITE_KEY, FAVORITE_TOTAL } from './constants';

const refs = {
  listRef: document.querySelector('.favorite__list'),
  buttonRef: document.querySelector('.card__favorite'),
};
const { listRef, buttonRef } = refs;

let favouriteNews = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
let colletionTotal = JSON.parse(localStorage.getItem(FAVORITE_TOTAL)) || 0;

// favoriteMarkup(getFavorites());

// {
/* <li id=${id} class='${containerClass}__card card'>

      <div class='card__container'>
        <img class='card__img' src="${imageUrl}" 
          alt="${imageAlt ?? abstract}">
        <span class='card__category'>${category}</span>
        ${alReadyRead}
        ${addToFavorite}
      </div>

      <h2 class='card__title'>${title}</h2>
      <p class='card__abstract'>${abstract}</p>
      <span class='card__date'>${date}</span>
      <a class='card__read' href="${url}">Read more</a>

    </li>`; */
// }

// functions

// if target = button go to closer li and inner html

//add event listener to butt
// buttonRef.addEventListener('click', addToFavourites);

function addToFavourites(evt) {
  evt.currentTarget.dataset.id = colletionTotal + 1;
  evt.currentTarget.dataset.favorite = evt.target.innerHTML;
  colletionTotal += 1;
  console.log(1);
  favouriteNews.push(evt.currentTarget.dataset.favorite);
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
    // const favoriteItems = localStorage.getItem(FAVORITE_KEY);
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

//closest or stop paitaintion if target `li`

//on click 
// id => isFavorite