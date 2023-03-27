import { objNormalize } from '../obj-normalize/index';
import { card } from '../card/index';
import {
  positionHandler,
  positionError,
} from '../weather-widget/user-geolocation';

import CardsApiService from '../cards-service';
const newsElement = document.querySelectorAll('.list__card');
const cardsApiService = new CardsApiService();

const cardList = document.querySelector('.card__list');
const pagList = document.querySelector('.pagination__list');

const PAGE_SIZE = 9;
let currentPage = 1;
let searchInitiated = false;

if (!searchInitiated) {
  cardsApiService.fetchMostPopular().then(data => {
    const news = objNormalize(data);
    const newsArr = news.map(item => card(item));
    const pageCount = Math.ceil(news.length / PAGE_SIZE);
    generateCards(currentPage, newsArr);
    generatePagination(pageCount);
  });
}

pagList.addEventListener('click', handlePaginationClick);

function generateCards(page, news) {
  cardList.innerHTML = '';
  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, news.length);

  for (let i = startIndex; i < endIndex; i++) {
    const dataCard = news[i];
    if (i === 2) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          positionHandler,
          positionError,
          () => {
            cardList.insertAdjacentHTML('beforeend', card({ type: 'widget' }));
          }
        );
      }
    } else {
      cardList.insertAdjacentHTML('beforeend', dataCard);
    }
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

function handlePaginationClick(e) {
  e.preventDefault();
  const { target } = e;
  if (target.classList.contains('pagination__page')) {
    currentPage = Number(target.dataset.page);
    if (!searchInitiated) {
      cardsApiService.fetchMostPopular().then(data => {
        const news = objNormalize(data);
        const newsArr = news.map(item => card(item));
        generateCards(currentPage, newsArr);
        generatePagination(Math.ceil(news.length / PAGE_SIZE));
      });
    }
  }
}

const nextButton = document.querySelector('.pag-btn__right');
const prevButton = document.querySelector('.pag-btn__left');

nextButton.addEventListener('click', () => {
  currentPage++;
  if (!searchInitiated) {
    cardsApiService.fetchMostPopular().then(data => {
      const news = objNormalize(data);
      const newsArr = news.map(item => card(item));
      const pageCount = Math.ceil(news.length / PAGE_SIZE);
      if (currentPage <= pageCount) {
        generateCards(currentPage, newsArr);
        generatePagination(pageCount);
      }
    });
  }
});

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    if (!searchInitiated) {
      cardsApiService.fetchMostPopular().then(data => {
        const news = objNormalize(data);
        const newsArr = news.map(item => card(item));
        generateCards(currentPage, newsArr);
        generatePagination(Math.ceil(news.length / PAGE_SIZE));
      });
    }
  }
});

export function setSearchInitiated() {
  searchInitiated = true;
}
