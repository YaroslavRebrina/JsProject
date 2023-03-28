import { objNormalize } from '../obj-normalize/index';
import { card } from '../card/index';
import CardsApiService from '../cards-service';
import { underfinedAdd, pagDisplayVisisble } from './pagination-teplates';

import { searchCancelation } from './paginationByPopular';
import { searchCategoryCancelation } from './paginationByCategory';

const cardsApiService = new CardsApiService();

const cardList = document.querySelector('.card__list');
const pagList = document.querySelector('.pagination__list');
const searchForm = document.querySelector('#search-form');
const input = document.querySelector('.header-input');
const searchBtn = document.querySelector('.header-input__icon');
const pag = document.querySelector('.pagination');

let PAGE_SIZE = 4;

if (window.innerWidth >= 320 && window.innerWidth <= 767) {
  PAGE_SIZE = 5;
} else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
  PAGE_SIZE = 8;
} else {
  PAGE_SIZE = 9;
}
let currentPage = 1;
let cancelSearch = false;
searchForm.addEventListener('mousedown', () => {
  cancelSearch = true;
  searchCancelation();
  searchCategoryCancelation();
});

cardsApiService.query = input.value.trim().toLowerCase();
input.addEventListener('input', e => {
  if (cancelSearch) {
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
  } else {
    return;
  }
});

searchForm.addEventListener('submit', handleSearchFormSubmit);

function handleSearchFormSubmit(e) {
  if (cancelSearch) {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.search.value;
    cardsApiService.query = inputValue;
    cardsApiService.fetchCards().then(data => {
      if (data.response.docs.length === 0) {
        pag.classList.add('pagination-hidden');
        document
          .querySelector('.underfined')
          .classList.remove('underfined-hidden');
      } else {
        underfinedAdd();
        pagDisplayVisisble();
      }
      const news = objNormalize(data);
      const newsArr = news.map(item => card(item));
      const pageCount = Math.ceil(news.length / PAGE_SIZE);
      generatePagination(pageCount);
      generateCards(currentPage, newsArr);
    });
  }
}

pagList.addEventListener('click', handlePaginationClick);

function handlePaginationClick(e) {
  if (cancelSearch) {
    e.preventDefault();
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
  } else {
    return;
  }
}

const nextButton = document.querySelector('.pag-btn__right');
const prevButton = document.querySelector('.pag-btn__left');

nextButton.addEventListener('click', () => {
  if (cancelSearch) {
    currentPage++;
    cardsApiService.fetchCards().then(data => {
      const news = objNormalize(data);
      const newsArr = news.map(item => card(item));
      const pageCount = Math.ceil(news.length / PAGE_SIZE);
      if (currentPage <= pageCount) {
        generatePagination(pageCount);
        generateCards(currentPage, newsArr);
      }
    });
  } else {
    return;
  }
});

prevButton.addEventListener('click', () => {
  if (cancelSearch) {
    if (currentPage > 1) {
      currentPage--;
      cardsApiService.fetchCards().then(data => {
        const news = objNormalize(data);
        const newsArr = news.map(item => card(item));
        generatePagination(Math.ceil(news.length / PAGE_SIZE));
        generateCards(currentPage, newsArr);
      });
    }
  } else {
    return;
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
export function searchQueryCancelation() {
  cancelSearch = false;
}

function appendDeafaultCardMurkup() {
  const markup = `
  <p>We haven’t found news from this category</p>
  <img src="../fonts/images/desktop/desktop.png" alt="">
  `;
  cardList.innerHTML = markup;
}
