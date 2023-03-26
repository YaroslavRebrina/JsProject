// import Notiflix from 'notiflix';
// // import CardsApiService from './cards-servise-corr';
// import CardsApiService from './cards-service';
// // import { renderNormalize } from './render-normalize';
// import { renderNormalize } from './obj-normalize/render-normalize';

// const cardsApiService = new CardsApiService();

// const searchForm = document.querySelector('#search-form');
// const submitBtn = document.querySelector('[type="submit"]');
// const gallery = document.querySelector('.card__list');

// searchForm.addEventListener('submit', onSearch);
// cardsApiService.fetchCards().then(data => {
//   renderNormalize(data);
// });
// // export function createGallery() {

// // }

// function onSearch(e) {
//   e.preventDefault();
//   cardsApiService.query = e.currentTarget.search.value.trim();

//   if (cardsApiService.query === '') {
//     Notiflix.Notify.info('Enter your request in the search');
//     return;
//   }

//   searchForm.reset();

//   cardsApiService.fetchCards().then(data => {
//     if (data.length === 0) {
//       appendDeafaultCardMurkup();
//     }

//     renderNormalize(data);
//     // зняти відповідний клас, що відповідає за активний стан категорії
//   });

//   clearCardsGallery();
// }

// function appendDeafaultCardMurkup() {
//   const markup = `
//   <p>We haven’t found news from this category</p>
//   <img src="../fonts/images/desktop/desktop.png" alt=" ">
//   `;
//   gallery.insertAdjacentHTML('beforeend', markup);
// }

// function clearCardsGallery() {
//   gallery.innerHTML = '';
// }
