const selected = document.querySelector('.selected');
const categoriesList = document.querySelector('.categories');
const othersCategories = document.querySelectorAll('.options-container')[0];
console.log(othersCategories);

import { objNormalize } from '../obj-normalize/index';
import { card } from '../card/index';
import { setSearchInitiated } from './paginationByPopular';
import { searchStoped } from './paginationBySearch';
import CardsApiService from '../cards-service';
const cardsApiService = new CardsApiService();

const cardList = document.querySelector('.card__list');
const pagList = document.querySelector('.pagination__list');
const PAGE_SIZE = 9;
let currentPage = 1;

categoriesList.addEventListener('click', handleCategoriesClick);
othersCategories.addEventListener('click', handleOthersCategoriesClick);

function handleOthersCategoriesClick(e) {
  setSearchInitiated();
  searchStoped();
  if (e.target.nodeName === 'LABEL') {
    const { target } = e;
    const categoryName = target.textContent;
    cardsApiService.category = categoryName.toLowerCase().trim();
    cardsApiService.fetchSearchByCategories().then(data => {
      const news = objNormalize(data);
      const newsArr = news.map(item => card(item));
      const pageCount = Math.ceil(news.length / PAGE_SIZE);
      generatePagination(pageCount);
      generateCards(currentPage, newsArr);
    });
  }
}

function handleCategoriesClick(e) {
  e.preventDefault();
  setSearchInitiated();
  searchStoped();
  if (e.target.nodeName === 'BUTTON') {
    const { target } = e;
    if (target.classList.contains('categories__button')) {
      const categoryName = target.textContent;
      cardsApiService.category = categoryName.toLowerCase().trim();
      cardsApiService.fetchSearchByCategories().then(data => {
        const news = objNormalize(data);
        const newsArr = news.map(item => card(item));
        const pageCount = Math.ceil(news.length / PAGE_SIZE);
        generatePagination(pageCount);
        generateCards(currentPage, newsArr);
      });
    }
  }
}

pagList.addEventListener('click', handlePaginationClick);

function handlePaginationClick(e) {
  e.preventDefault();
  setSearchInitiated();
  searchStoped();
  const { target } = e;
  if (target.classList.contains('pagination__page')) {
    currentPage = Number(target.dataset.page);
    console.log(cardsApiService.category);

    cardsApiService.fetchSearchByCategories().then(data => {
      console.log(
        '🚀 ~ file: paginationByCategory.js:29 ~ cardsApiService.fetchSearchByCategories ~ data:',
        data
      );
      const news = objNormalize(data);
      const newsArr = news.map(item => card(item));
      generatePagination(Math.ceil(news.length / PAGE_SIZE));
      generateCards(currentPage, newsArr);
    });
  }
}

const nextButton = document.querySelector('.pag-btn__right');
const prevButton = document.querySelector('.pag-btn__left');

nextButton.addEventListener('click', () => {
  setSearchInitiated();
  searchStoped();
  currentPage++;
  console.log(cardsApiService.category);

  cardsApiService.fetchSearchByCategories().then(data => {
    const news = objNormalize(data);
    const newsArr = news.map(item => card(item));
    const pageCount = Math.ceil(news.length / PAGE_SIZE);
    if (currentPage <= pageCount) {
      generatePagination(pageCount);
      generateCards(currentPage, newsArr);
    }
  });
});

prevButton.addEventListener('click', () => {
  setSearchInitiated();
  searchStoped();
  console.log(cardsApiService.category);

  if (currentPage > 1) {
    currentPage--;
    cardsApiService.fetchSearchByCategories().then(data => {
      const news = objNormalize(data);
      const newsArr = news.map(item => card(item));
      generatePagination(Math.ceil(news.length / PAGE_SIZE));
      generateCards(currentPage, newsArr);
    });
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
