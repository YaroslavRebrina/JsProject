import { getCurrentWeather } from './weather-api-service';
import { getDefaultWeather } from './weather-api-service';
import { checkResult } from './weather-widget';
import { showError } from './weather-widget';
import { createGallery } from '../search-form';

addEventListener('DOMContentLoaded', getUserLocation);

export function getUserLocation() {
  createGallery();
  return navigator.geolocation.getCurrentPosition(
    positionHandler,
    positionError
  );
}

function positionHandler(position) {
  getCurrentWeather(position.coords).then(checkResult).catch(showError);
}

function positionError(error) {
  console.log(error);
  getDefaultWeather().then(checkResult).catch(showError);
}
