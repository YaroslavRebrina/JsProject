import { getCurrentWeather } from './weather-api-service';
import { getDefaultWeather } from './weather-api-service';
import { checkResult } from './weather-widget';
import { showError } from './weather-widget';

function positionHandler(position) {
  return getCurrentWeather(position.coords).then(checkResult).catch(showError);
}

function positionError(error) {
  return getDefaultWeather().then(checkResult).catch(showError);
}
export { positionHandler, positionError };
