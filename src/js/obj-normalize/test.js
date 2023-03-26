import data from '../json/all.json';
import data2 from '../json/articlesearch.json';
import data3 from '../json/business.json';
import { objNormalize } from '.';
import { card } from '../card';

testNormalize(data);
testNormalize(data2);
testNormalize(data3);

function testNormalize(data) {
  const objList = objNormalize(data);

  // обробляємо масив, ділимо на сторінки,... шукаємо вже прочитані і додані
  console.log('OBJ Normalize:', objList);

  // заливаємо на сторінку
  const listRender = objList.map(item => card(item)).join('');

  // const gallery = document.querySelector('.card__list');
  // gallery.insertAdjacentHTML('beforeend', listRender);
}
