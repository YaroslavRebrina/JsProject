import CardsApiService from './cards-service';

const selected = document.querySelector('.js-selected');
const optionsContainer = document.querySelector('.js-container');
const categoriesList = document.querySelector('.js-categories');
const optionsList = document.querySelectorAll('.js-option');
const categoriesButton = document.querySelector(
  '.select-box .options-container'
);
const cardsApiService = new CardsApiService();

const mediaList = {
  mobile: window.matchMedia('(min-width: 320px) and (max-width: 767px)'),
  tablet: window.matchMedia('(min-width: 768px) and (max-width: 1279px)'),
  desktop: window.matchMedia('(min-width: 1280px)'),
};

cardsApiService
  .fetchListAllCategories()
  .then(data => data.results)
  .then(data => {
    appendCategoriesButtonsMarkup(data);
  });

function appendCategoriesButtonsMarkup(data) {
  const docs = data;

  if (mediaList.mobile.matches) {
    const markupSelect = docs
      .map(({ display_name }) => {
        return `<div class="js-option option">
            <input type="radio" class="radio" id="${display_name}" name="category" />
            <label for="${display_name}">${display_name}</label>
          </div>`;
      })
      .join('');
    optionsContainer.insertAdjacentHTML('beforeend', markupSelect);

    const optionsList = document.querySelectorAll('.js-option');
    optionsList.forEach(i => {
      i.addEventListener('click', () => {
        console.log('click');
        selected.innerHTML = i.querySelector('label').innerHTML;
        optionsContainer.classList.remove('active');
      });
    });
  }

  if (mediaList.tablet.matches) {
    const markupButtons = docs
      .map(({ display_name }, i) => {
        if (i <= 3) {
          return `
          <button type="button" class="categories__button">
            ${display_name}
          </button>
        `;
        }
      })
      .join('');
    categoriesList.insertAdjacentHTML('beforeend', markupButtons);

    const markupSelect = docs
      .map(({ display_name }, i) => {
        if (i > 3) {
          return `<div class="js-option option">
            <input type="radio" class="radio" id="${display_name}" name="category" />
            <label for="${display_name}">${display_name}</label>
          </div>`;
        }
      })
      .join('');
    optionsContainer.insertAdjacentHTML('beforeend', markupSelect);

    const optionsList = document.querySelectorAll('.js-option');
    optionsList.forEach(i => {
      i.addEventListener('click', () => {
        console.log('click');
        selected.innerHTML = i.querySelector('label').innerHTML;
        optionsContainer.classList.remove('active');
      });
    });
  }

  if (mediaList.desktop.matches) {
    const markupButtons = docs
      .map(({ display_name }, i) => {
        if (i <= 5) {
          return `
          <button type="button" class="categories__button">
            ${display_name}
          </button>
        `;
        }
      })
      .join('');
    categoriesList.insertAdjacentHTML('beforeend', markupButtons);

    const markupSelect = docs
      .map(({ display_name }, i) => {
        if (i > 5) {
          return `<div class="js-option option">
            <input type="radio" class="radio" id="${display_name}" name="category" />
            <label for="${display_name}">${display_name}</label>
          </div>`;
        }
      })
      .join('');
    optionsContainer.insertAdjacentHTML('beforeend', markupSelect);

    const optionsList = document.querySelectorAll('.js-option');
    optionsList.forEach(i => {
      i.addEventListener('click', () => {
        console.log('click');
        selected.innerHTML = i.querySelector('label').innerHTML;
        optionsContainer.classList.remove('active');
      });
    });
  }
}

// selected.addEventListener('click', () => {
//   optionsContainer.classList.add('active');
// });
selected.addEventListener('click', () => {
  categoriesButton.style.opacity = '1';
});
optionsContainer.addEventListener('mouseleave', e => {
  categoriesButton.style.opacity = '0';
});
