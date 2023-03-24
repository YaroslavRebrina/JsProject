import data from './js/json/all.json';
import { card } from './js/card/';

const dataCard = {
  id: data.results[0].uri.replace('nyt://article/', ''),
  date: data.results[0].published_date.replace(
    /((\d){4})-((\d){2})-((\d){2})(\S)*/g,
    '$3/$2/$1'
  ),
  category: data.results[0].section,
  title: data.results[0].title,
  abstract: data.results[0].abstract,
  imageUrl: data.results[0].multimedia[2].url,
  imageAlt: data.results[0].multimedia[2].caption,
  url: data.results[0].url,
  isFavorite: false,
  isRead: false,
};

console.log(data.results);
console.log(card(dataCard));

document.body.innerHTML = card(dataCard);
