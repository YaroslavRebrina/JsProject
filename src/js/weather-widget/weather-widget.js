import { createGallery } from '../search-form';
import sprite from '../../fonts/images/icons.svg';
const mediaList = {
  mobile: window.matchMedia('(min-width: 320px) and (max-width: 767px)'),
  tablet: window.matchMedia('(min-width: 768px) and (max-width: 1279px)'),
  desktop: window.matchMedia('(min-width: 1280px)'),
};

export function checkResult(response) {
  createMarkup(response);
}

export function showError(error) {
  console.log(error);
}

function createMarkup(response) {
  const formattedDate = {
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    getFormattedDay(date) {
      return this.days[date.getDay()];
    },
    getFormattedMonth(date) {
      return this.months[date.getMonth()];
    },
  };

  const date = new Date();

  const markup = `<li class="list__card card card--weather"><div class="weather__widget">
  <div class="weather__content">
    <div class="weather__wrapper">
      <span class="temperature">${response.main.temp.toFixed(0)}&#176;</span>
      <div class="weather__wrapper weather__wrapper--column">
        <span class="description">${response.weather[0].main}</span>
        <div class="weather__wrapper weather__wrapper--accent">
          <svg class="location-icon" id="location-icon">
            <use href="${sprite}#icon-location"></use>
          </svg>
          <span class="location">${response.name}</span>
        </div>
      </div>
    </div>
    <img src="https://openweathermap.org/img/wn/${
      response.weather[0].icon
    }@2x.png" alt="${response.weather[0].main}" class="weather-icon">
    <div class="date">${formattedDate.getFormattedDay(date)}
      <br />
      ${date.getDate()} ${formattedDate.getFormattedMonth(
    date
  )} ${date.getFullYear()}
    </div>
  </div>
</div>
</li>`;

  showWeather(markup);
}

function showWeather(markup) {
  const refs = {
    list: document.querySelector('.list'),
    listItems: document.querySelectorAll('.card'),
  };

  if (mediaList.mobile.matches) {
    console.log(refs.listItems);
    checkScreenSize(markup, refs);
    return refs.listItems[0].insertAdjacentHTML('beforebegin', markup);
  }
  if (mediaList.tablet.matches) {
    console.log(refs.listItems);
    checkScreenSize(markup, refs);
    return refs.listItems[1].insertAdjacentHTML('beforebegin', markup);
  }
  if (mediaList.desktop.matches) {
    console.log(refs.listItems);
    checkScreenSize(markup, refs);
    return refs.listItems[2].insertAdjacentHTML('beforebegin', markup);
  } else {
    console.log('!!!');
  }
}

function checkScreenSize(markup) {
  mediaList.mobile.addEventListener('change', show);
  mediaList.tablet.addEventListener('change', show);
  mediaList.desktop.addEventListener('change', show);

  function show() {
    if (mediaList.mobile.matches) {
      document.querySelector('.card--weather').remove();
      return document
        .querySelectorAll('.card')[0]
        .insertAdjacentHTML('beforebegin', markup);
    }
    if (mediaList.tablet.matches) {
      document.querySelector('.card--weather').remove();
      return document
        .querySelectorAll('.card')[1]
        .insertAdjacentHTML('beforebegin', markup);
    }
    if (mediaList.desktop.matches) {
      document.querySelector('.card--weather').remove();
      return document
        .querySelectorAll('.card')[2]
        .insertAdjacentHTML('beforebegin', markup);
    }
  }
}
