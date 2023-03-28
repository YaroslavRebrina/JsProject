//MStartsev/

// Сортування масиву нормалізованих об'єктів по даті.
export const objDateSort = data => {
  data.sort((a, b) => (a.date < b.date ? 1 : -1));

  //Для тесту:
  // data.map(item => console.log(`${item.date} : ${item.id}`));

  return data;
};

// функція для зміни вхідних даних з серверу на ті що вже збережено в LocalStorage
export const replaceObjectsById = (responseArray, LOCAL_STORAGE_KEY) => {
  // Отримуємо масив з localStorage за заданим ключем
  const localStorageArray = (() => {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    } catch (err) {
      return [];
    }
  })();

  // Створюємо мапу для швидшого доступу до елементів другого масиву за їх id
  const mapById = new Map(
    localStorageArray.map(localStorageItem => [
      localStorageItem.id,
      localStorageItem,
    ])
  );

  // Проходимося по елементах першого масиву
  responseArray.forEach((responseItem, index) => {
    // Якщо знайшли об'єкт в другому масиві з таким же id, замінюємо його
    if (mapById.has(responseItem.id)) {
      responseArray[index] = mapById.get(responseItem.id);
    }
  });

  return responseArray;
};

// функція для збереження в LocalStorage
function saveArrayToLocalStorage(arr1, key) {
  const json = JSON.stringify(arr1);
  localStorage.setItem(key, json);
}
