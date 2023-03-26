import { READ_NEWS_KEY } from './constants';

// перевірка наявності новини в прочитаних

function isNewsRead(newsId) {
  const readNews = JSON.parse(localStorage.getItem(READ_NEWS_KEY)) || [];
  return readNews.some(news => news.id === newsId);
}

// зберігання прочитаної новини

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

// групування новин по даті перегляду

function groupNewsByDate(newsArray) {
  const groupedNews = {};

  newsArray.forEach(news => {
    const date = news.date;

    if (!groupedNews[date]) {
      groupedNews[date] = [];
    }

    groupedNews[date].push(news);
  });

  return groupedNews;
}

//  вішати на кнопку "read more"

function clickReadMore(event, newsData) {
  event.preventDefault();
  saveReadNews(newsData);

  window.open(newsData.url, '_blank');
}

const readNews = getReadNews();
const groupedReadNews = groupNewsByDate(readNews);
