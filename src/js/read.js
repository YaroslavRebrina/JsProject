import { card } from './card/index';
import { FAVORITE_KEY } from './constants';

try {
  const readContainer = document.querySelector('.card__list');
  const readNews = JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];

  const sortedNews = readNews.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const accordionItems = {};

  sortedNews.forEach(news => {
    if (news.isRead === true) {
      const newsDate = new Date(news.date).toLocaleDateString();

      if (!accordionItems[newsDate]) {
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion__item');

        const accordionHeader = document.createElement('h2');
        accordionHeader.classList.add('accordion__title');
        accordionHeader.innerHTML = `${newsDate}<span class="accordion__icon"></span>`;

        const accordionContent = document.createElement('div');
        accordionContent.classList.add('accordion__content');

        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionContent);

        accordionItems[newsDate] = accordionItem;

        readContainer.appendChild(accordionItem);
      }

      const accordionContent = accordionItems[newsDate].querySelector(
        '.accordion__content'
      );
      const readNewsMarkup = card(news);
      accordionContent.insertAdjacentHTML('beforeend', readNewsMarkup);
    }
  });

  const accordionTitles = document.querySelectorAll('.accordion__title');
  accordionTitles.forEach(title => {
    title.addEventListener('click', () => {
      const accordionItem = title.parentNode;
      accordionItem.classList.toggle('active');
    });
  });
} catch (error) {
  console.log(error);
}
