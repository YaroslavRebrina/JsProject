import { objNormalize } from '.';
import { card } from '../card';

export function renderNormalize(data) {
  const objList = objNormalize(data);

  // обробляємо масив, ділимо на сторінки,... шукаємо вже прочитані і додані
  console.log('OBJ Normalize:', objList);
  // 1. пошук в локал по id чи вже э такы об'єкти
  // 2. якщо є заміна на ті,що у сховищі
  // 3. сортуємо по даті
  // 4. визначаємо довжину масиву = розраховуємо кількість сторінок
  // 5. рендер 1 сторінки
  // 6. при події переходу на сторінку N витягуємо об'єкти починаючи з ( n*(N-1) + 1)
  //    в окремий масив і кидаємо на рендер
  // n - кількість на сторінці

  // заливаємо на сторінку
  const listRender = objList.map(item => card(item)).join('');

  const gallery = document.querySelector('.card__list');
  gallery.insertAdjacentHTML('beforeend', listRender);
}
