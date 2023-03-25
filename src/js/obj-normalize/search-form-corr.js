import Notiflix from 'notiflix';
import CardsApiService from './cards-servise-corr';
import { renderNormalize } from './render-normalize';

const cardsApiService = new CardsApiService();
const searchForm = document.querySelector('#search-form');
const submitBtn = document.querySelector('[type="submit"]');
const gallery = document.querySelector('.card__list');

searchForm.addEventListener('submit', onSearch);

cardsApiService.fetchCards().then(data => {
  renderNormalize(data);
});

function onSearch(e) {
  e.preventDefault();
  console.log(e.currentTarget.search.value.trim());
  cardsApiService.query = e.currentTarget.search.value.trim();

  if (cardsApiService.query === '') {
    Notiflix.Notify.info('Enter your request in the search');
    return;
  }

  searchForm.reset();

  cardsApiService.fetchCards().then(data => {
    if (data.length === 0) {
      appendDeafaultCardMurkup();
    }

    renderNormalize(data);
    // зняти відповідний клас, що відповідає за активний стан категорії
  });

  clearCardsGallery();
}

function appendDeafaultCardMurkup() {
  const markup = `
  <p>We haven’t found news from this category</p>
  <img src="../images/desktop/desktop.png" alt=" ">
  `;
  gallery.insertAdjacentHTML('beforeend', markup);
}

function clearCardsGallery() {
  gallery.innerHTML = '';
}

// function dateFormatting(dateString) {
//   const date = new Date(dateString);
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// }
