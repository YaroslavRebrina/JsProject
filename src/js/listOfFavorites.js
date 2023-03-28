import { card } from './card/index';
import { FAVORITE_KEY } from './constants';

try {
  const favoriteContainer = document.querySelector('.favorite__list');

  const readNews = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
  if (readNews) {
    favoriteContainer.innerHTML = '';
    readNews.forEach(news => {
      if (news.isFavorite === true) {
        const readNewsMarkup = card(news);
        favoriteContainer.insertAdjacentHTML('beforeend', readNewsMarkup);
      }
    });
  }
} catch (error) {
  console.log(error);
}
