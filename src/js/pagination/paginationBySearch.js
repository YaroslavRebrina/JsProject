import { objNormalize } from '../obj-normalize/index';
import { card } from '../card/index';
import { setSearchInitiated } from './paginationByPopular';
import CardsApiService from '../cards-service';
const cardsApiService = new CardsApiService();

const cardList = document.querySelector('.card__list');
const pagList = document.querySelector('.pagination__list');
const searchForm = document.querySelector('#search-form');
const input = document.querySelector('.header-input');
const searchBtn = document.querySelector('.header-input__icon');
let stopSearchByClick = false;

const PAGE_SIZE = 9;
let currentPage = 1;
cardsApiService.query = input.value.trim().toLowerCase();

input.addEventListener('input', e => {
  setSearchInitiated();
  cardsApiService.query = e.target.value.trim().toLowerCase();
  searchBtn.addEventListener('click', () => {
    cardsApiService.fetchCards().then(data => {
      const news = objNormalize(data);
      const newsArr = news.map(item => card(item));
      const pageCount = Math.ceil(news.length / PAGE_SIZE);
      generatePagination(pageCount);
      generateCards(currentPage, newsArr);
    });
  });
});

searchForm.addEventListener('submit', handleSearchFormSubmit);

function handleSearchFormSubmit(e) {
  e.preventDefault();
  setSearchInitiated();
  const inputValue = e.currentTarget.elements.search.value;
  cardsApiService.query = inputValue;
  cardsApiService.fetchCards().then(data => {
    const news = objNormalize(data);
    const newsArr = news.map(item => card(item));
    const pageCount = Math.ceil(news.length / PAGE_SIZE);
    generatePagination(pageCount);
    generateCards(currentPage, newsArr);
  });
}

pagList.addEventListener('click', handlePaginationClick);

function handlePaginationClick(e) {
  e.preventDefault();
  setSearchInitiated();
  if (!stopSearchByClick) {
    const { target } = e;
    if (target.classList.contains('pagination__page')) {
      currentPage = Number(target.dataset.page);
      cardsApiService.fetchCards().then(data => {
        const news = objNormalize(data);
        const newsArr = news.map(item => card(item));
        generatePagination(Math.ceil(news.length / PAGE_SIZE));
        generateCards(currentPage, newsArr);
      });
    }
  }
}

const nextButton = document.querySelector('.pag-btn__right');
const prevButton = document.querySelector('.pag-btn__left');

nextButton.addEventListener('click', () => {
  setSearchInitiated();
  currentPage++;
  if (!stopSearchByClick) {
    cardsApiService.fetchCards().then(data => {
      const news = objNormalize(data);
      const newsArr = news.map(item => card(item));
      const pageCount = Math.ceil(news.length / PAGE_SIZE);
      if (currentPage <= pageCount) {
        generatePagination(pageCount);
        generateCards(currentPage, newsArr);
      }
    });
  }
});

prevButton.addEventListener('click', () => {
  setSearchInitiated();
  if (currentPage > 1) {
    currentPage--;
    if (!stopSearchByClick) {
      cardsApiService.fetchCards().then(data => {
        const news = objNormalize(data);
        const newsArr = news.map(item => card(item));
        generatePagination(Math.ceil(news.length / PAGE_SIZE));
        generateCards(currentPage, newsArr);
      });
    }
  }
});
function generateCards(page, news) {
  cardList.innerHTML = '';
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, news.length);

  for (let i = startIndex; i < endIndex; i++) {
    const dataCard = news[i];

    cardList.insertAdjacentHTML('beforeend', dataCard);
  }
}

function generatePagination(pageCount) {
  pagList.innerHTML = '';

  for (let i = 1; i <= pageCount; i++) {
    const isActive = i === currentPage ? 'pagination__page--current' : '';
    const paginationItem = `
      <li>
        <a href="#" class="pagination__page ${isActive}" data-page="${i}">${i}</a>
      </li>
    `;
    pagList.insertAdjacentHTML('beforeend', paginationItem);
  }
}
export function searchStoped() {
  stopSearchByClick = true;
}
