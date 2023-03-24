import CardsApiService from './cards-service';
import Notiflix from 'notiflix';

const cardsApiService = new CardsApiService();
const searchForm = document.querySelector('#search-form');
const submitBtn = document.querySelector('[type="submit"]');
const gallery = document.querySelector('.card__list');

searchForm.addEventListener('submit', onSearch);

cardsApiService.fetchCards().then(data => {
  appendCardsMarkup(data);
});

function onSearch(e) {
  e.preventDefault();

  cardsApiService.query = e.currentTarget.elements.searchQuery.value.trim();

  if (cardsApiService.query === '') {
    Notiflix.Notify.info('Enter your request in the search');
    return;
  }

  searchForm.reset();

  cardsApiService.fetchCards().then(data => {
    if (data.length === 0) {
      appendDeafaultCardMurkup();
    }

    appendCardsMarkup(data);
    // зняти відповідний клас, що відповідає за активний стан категорії
  });

  clearCardsGallery();
}

function appendCardsMarkup(data) {
  const docs = data;
  const markup = docs
    .map(({ news_desk, abstract, pub_date, web_url, headline, multimedia }) => {
      return `<li>
              <div class='card__container'>
              <img src="${
                multimedia.length > 0
                  ? `https://static01.nyt.com/${multimedia[2].url}`
                  : '../images/mobile/mobile.png'
              }" alt="${headline.main}">
              <span>${news_desk}</span>
              </div>
              <h2>${headline.main}</h2>
              <p>${abstract}</p>
              <span>${dateFormatting(pub_date)}</span>
              <a href="${web_url}">Read more</a>
              </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
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

function dateFormatting(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
