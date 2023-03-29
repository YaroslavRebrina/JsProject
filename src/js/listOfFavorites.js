import { card } from './card/index';
import { FAVORITE_KEY } from './constants';

try {
  const favoriteContainer = document.querySelector('.favorite__list');
  const favoriteError = document.querySelector('.favorite__error');

  const readNews = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
  if (readNews.length > 0) {
    favoriteError.style.display = 'none';
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
