import CardsApiService from './cards-service';

const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const categoriesList = document.querySelector('.categories');
const selectBody = document.querySelector('.options-container');
const optionsList = document.querySelectorAll('.option');

const cardsApiService = new CardsApiService();

cardsApiService
  .fetchListAllCategories()
  .then(data => data.results)
  .then(data => {
    appendCategoriesButtonsMarkup(data);
  });

function appendCategoriesButtonsMarkup(data) {
  const docs = data;

  const markupButtons = docs
    .map(({ display_name }, i) => {
      if (i <= 5) {
        return `<button type="button" class="categories__button">${display_name}</button>`;
      }
    })
    .join('');
  categoriesList.insertAdjacentHTML('beforeend', markupButtons);

  const markupSelect = docs
    .map(({ display_name }, i) => {
      if (i > 5) {
        return `<div class="option">
            <input type="radio" class="radio" id="${display_name}" name="category" />
            <label for="${display_name}">${display_name}</label>
          </div>`;
      }
    })
    .join('');
  selectBody.insertAdjacentHTML('beforeend', markupSelect);
}

selected.addEventListener('click', () => {
  optionsContainer.classList.add('active');
});

optionsList.forEach(i => {
  i.addEventListener('click', () => {
    selected.innerHTML = i.querySelector('label').innerHTML;
    optionsContainer.classList.remove('active');
  });
});
