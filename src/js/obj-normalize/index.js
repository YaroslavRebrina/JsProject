//MStartsev/

import defaultImageUrl from '../../fonts/images/tablet/tablet.png';

const baseUrl = 'https://static01.nyt.com/';
const windowInnerWidth = document.documentElement.clientWidth; // ширина сторінки
const date = new Date();
const dateNews = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`; // Якщо відсутня дата, беремо поточну.
const uriRepl = 'nyt://article/';

export const objNormalize = data => {
  let objList = {};

  try {
    objList = data.results || data.response.docs;
  } catch (err) {
    console.log('Response ERROR!!!');
  }

  const list = objList.map(objItem => {
    return objCardNormalize(objItem);
  });
  
  return list;
};

function objCardNormalize(objItem) {
  const dataCard = {};

  //ID
  dataCard.id = objItem.uri.replace(uriRepl, '');

  // Дата публікації
  dataCard.date = (() => {
    if (objItem.published_date) {
      return objItem.published_date;
    }

    if (objItem.pub_date) {
      return objItem.pub_date;
    }

    return dateNews; //Коли автор забув дату поставити)
  })();

  // Тематика/категорія
  dataCard.category = objItem.section || objItem.section_name;

  //Заголовок
  dataCard.title = objItem.title || objItem.headline.main;

  //Короткий опис новини
  dataCard.abstract = objItem.abstract;

  //нема ради, отака страшна перевірка:)
  if (objItem.media)
    if (objItem.media.length)
      if (objItem.media[0]['media-metadata'])
        if (objItem.media[0]['media-metadata'].length) {
          //пошук оптимальної картинки
          const objImage = searchObjImageForCard(
            objItem.media[0]['media-metadata']
          );

          if (!/static01.nyt.com/i.test(objImage.url)) {
            objImage.url = baseUrl + objImage.url;
          }

          // src картинки
          dataCard.imageUrl = objImage.url;
        } else {
          if (objItem.multimedia)
            if (objItem.multimedia.length) {
              //пошук оптимальної картинки
              const objImage = searchObjImageForCard(objItem.multimedia);

              if (!/static01.nyt.com/i.test(objImage.url)) {
                objImage.url = baseUrl + objImage.url;
              }

              // src картинки
              dataCard.imageUrl = objImage.url;

              // alt картинки
              dataCard.imageAlt = objImage.caption;
            } else {
              // if("загубилась картинка") return буде:)
              dataCard.imageUrl = defaultImageUrl;
            }
        }

  dataCard.url = objItem.url || objItem.web_url;

  dataCard.isFavorite = false; //Default
  dataCard.isRead = false; //Default

  return dataCard;
}

function searchObjImageForCard(multimediaObj) {
  //сортуємо картинки по розміру
  multimediaObj.sort((a, b) => (a.width > b.width ? 1 : -1));

  //визначаємо потрібний розмір
  const cardWidth = () => {
    if (windowInnerWidth >= 1280) return 395;
    if (windowInnerWidth >= 768) return 353;
    return 288;
  };

  //шукаємо об'єкт з потрібною картинкою
  let objImageGoodSize = multimediaObj.find(item => item.width > cardWidth());

  //повертаємо
  return objImageGoodSize;
}
