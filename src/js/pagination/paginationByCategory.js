const categoriesList = document.querySelector('.categories');
const othersCategories = document.querySelectorAll('.options-container')[0];
const selected = document.querySelector('.select-box');
const underfined = document.querySelector('.underfined');
const pag = document.querySelector('.pagination');

import { underfinedAdd, pagDisplayVisisble } from './pagination-teplates';

import { objNormalize } from '../obj-normalize/index';
import { card } from '../card/index';
import { searchCancelation } from './paginationByPopular';
import { searchQueryCancelation } from './paginationBySearch';

import CardsApiService from '../cards-service';
const cardsApiService = new CardsApiService();

const cardList = document.querySelector('.card__list');
const pagList = document.querySelector('.pagination__list');
let PAGE_SIZE = 4;

if (window.innerWidth >= 320 && window.innerWidth <= 767) {
  PAGE_SIZE = 5;
} else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
  PAGE_SIZE = 8;
} else {
  PAGE_SIZE = 9;
}

let currentPage = 1;
let cancelSearchCategory = false;

categoriesList.addEventListener('mousedown', () => {
  cancelSearchCategory = true;
  searchCancelation();
  searchQueryCancelation();
});
selected.addEventListener('mousedown', () => {
  cancelSearchCategory = true;
  searchCancelation();
  searchQueryCancelation();
});

categoriesList.addEventListener('click', handleCategoriesClick);
othersCategories.addEventListener('click', handleOthersCategoriesClick);

function handleOthersCategoriesClick(e) {
  if (cancelSearchCategory) {
    if (!underfined.classList.contains('underfined-hidden')) {
      underfined.classList.add('underfined-hidden');
      pag.classList.remove('pagination-hidden');
    }
    if (e.target.nodeName === 'LABEL') {
      const { target } = e;
      const categoryName = target.textContent;
      cardsApiService.category = encodeURIComponent(
        categoryName.toLowerCase().trim()
      );
      cardsApiService.fetchSearchByCategories().then(data => {
        const news = objNormalize(data);
        const newsArr = news.map(item => card(item));
        const pageCount = Math.ceil(news.length / PAGE_SIZE);
        generatePagination(pageCount);
        generateCards(currentPage, newsArr);
      });
    }
  } else {
    return;
  }
}

function handleCategoriesClick(e) {
  if (cancelSearchCategory) {
    e.preventDefault();
    if (!underfined.classList.contains('underfined-hidden')) {
      underfined.classList.add('underfined-hidden');
      pag.classList.remove('pagination-hidden');
    }
    if (e.target.nodeName === 'BUTTON') {
      const { target } = e;
      if (target.classList.contains('categories__button')) {
        const categoryName = target.textContent;
        cardsApiService.category = encodeURIComponent(
          categoryName.toLowerCase().trim()
        );
        cardsApiService.fetchSearchByCategories().then(data => {
          const news = objNormalize(data);
          const newsArr = news.map(item => card(item));
          const pageCount = Math.ceil(news.length / PAGE_SIZE);
          generatePagination(pageCount);
          generateCards(currentPage, newsArr);
        });
      }
    } else {
      return;
    }
  }
}

pagList.addEventListener('click', handlePaginationClick);

function handlePaginationClick(e) {
  if (cancelSearchCategory) {
    e.preventDefault();
    const { target } = e;
    if (target.classList.contains('pagination__page')) {
      currentPage = Number(target.dataset.page);
      console.log(cardsApiService.category);

      cardsApiService.fetchSearchByCategories().then(data => {
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
  if (cancelSearchCategory) {
    currentPage++;
    cardsApiService.fetchSearchByCategories().then(data => {
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
  if (cancelSearchCategory) {
    if (currentPage > 1) {
      currentPage--;
      cardsApiService.fetchSearchByCategories().then(data => {
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
export function searchCategoryCancelation() {
  cancelSearchCategory = false;
}
