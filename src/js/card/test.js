// Відсутня функція нормалізації даних станом на 24.3.23 6:30
// Тестовий рендер картки

import { card } from '.';
import data from '../json/all.json';
import data2 from '../json/articlesearch.json';
import data3 from '../json/business.json';

const cardList = document.querySelector('.card__list');

const dataCard = {
  id: data.results[3].uri.replace('nyt://article/', ''),
  date: data.results[3].published_date.replace(
    /((\d){4})-((\d){2})-((\d){2})(\S)*/g,
    '$3/$2/$1'
  ),
  category: data.results[3].section,
  title: data.results[3].title,
  abstract: data.results[3].abstract,
  imageUrl: data.results[3].multimedia[2].url,
  imageAlt: data.results[3].multimedia[2].caption,
  url: data.results[3].url,
  //   isFavorite: false,
  //   isRead: false,
};

// console.log(data.results);
// console.log(card(dataCard));
try {
  cardList.innerHTML = card(dataCard);
} catch (error) {
  console.log(error.message);
}
