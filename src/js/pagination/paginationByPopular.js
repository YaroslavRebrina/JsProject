import { objNormalize } from '../obj-normalize/index';
import { card } from '../card/index';
import {
  positionHandler,
  positionError,
} from '../weather-widget/user-geolocation';
import CardsApiService from '../cards-service';
import { RENDERED } from '../constants';

const cardsApiService = new CardsApiService();
const cardList = document.querySelector('.card__list');
const pagList = document.querySelector('.pagination__list');
export let dataForFavorite = null;

let PAGE_SIZE = 4;

if (window.innerWidth >= 320 && window.innerWidth <= 767) {
  PAGE_SIZE = 5;
} else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
  PAGE_SIZE = 8;
} else {
  PAGE_SIZE = 9;
}

let currentPage = 1;
let cancelSearchPopular = true;

if (cancelSearchPopular) {
  cardsApiService.fetchMostPopular().then(data => {
    const news = objNormalize(data);
    dataForFavorite = news;
    localStorage.setItem(RENDERED, JSON.stringify(dataForFavorite));
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
  if (cancelSearchPopular) {
    e.preventDefault();
    const { target } = e;
    if (target.classList.contains('pagination__page')) {
      currentPage = Number(target.dataset.page);

      cardsApiService.fetchMostPopular().then(data => {
        const news = objNormalize(data);
        const newsArr = news.map(item => card(item));
        generateCards(currentPage, newsArr);
        generatePagination(Math.ceil(news.length / PAGE_SIZE));
      });
    }
  } else {
    return;
  }
}

const nextButton = document.querySelector('.pag-btn__right');
const prevButton = document.querySelector('.pag-btn__left');

nextButton.addEventListener('click', () => {
  if (cancelSearchPopular) {
    currentPage++;
    cardsApiService.fetchMostPopular().then(data => {
      const news = objNormalize(data);
      const newsArr = news.map(item => card(item));
      const pageCount = Math.ceil(news.length / PAGE_SIZE);
      if (currentPage <= pageCount) {
        generateCards(currentPage, newsArr);
        generatePagination(pageCount);
      }
    });
  } else {
    return;
  }
});

prevButton.addEventListener('click', () => {
  if (cancelSearchPopular) {
    if (currentPage > 1) {
      currentPage--;
      cardsApiService.fetchMostPopular().then(data => {
        const news = objNormalize(data);
        const newsArr = news.map(item => card(item));
        generateCards(currentPage, newsArr);
        generatePagination(Math.ceil(news.length / PAGE_SIZE));
      });
    }
  } else {
    return;
  }
});

export function searchCancelation() {
  cancelSearchPopular = false;
}
