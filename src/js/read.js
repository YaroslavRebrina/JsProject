import { Accordion } from 'accordion';
import { card } from './card/index';
import { READ_NEWS_KEY } from './constants';

// перевірка наявності новини в прочитаних

function isNewsRead(newsId) {
  const readNews = JSON.parse(localStorage.getItem(READ_NEWS_KEY)) || [];
  return readNews.some(news => news.id === newsId);
}

// зберігання прочитаної новини. вішати на кнопку read more

function saveReadNews(newsData) {
  const readNews = JSON.parse(localStorage.getItem(READ_NEWS_KEY)) || [];

  if (!isNewsRead(newsData.id)) {
    readNews.push(newsData);
    localStorage.setItem(READ_NEWS_KEY, JSON.stringify(readNews));
  } else {
    const updatedReadNews = readNews.map(news => {
      if (news.id === newsData.id) {
        return newsData;
      }
      return news;
    });
    localStorage.setItem(READ_NEWS_KEY, JSON.stringify(updatedReadNews));
  }
}

// отримання прочитаних новин

function getReadNews() {
  const readNews = JSON.parse(localStorage.getItem(READ_NEWS_KEY)) || [];
  return readNews;
}
