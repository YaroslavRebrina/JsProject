const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

const REQUEST_OPTIONS = {
  appid: 'dbe190140250d3087dbd292674c0b7da',
  lat: 51.5085,
  lon: -0.1257,
  units: 'metric',
};

export async function getCurrentWeather(position) {
  REQUEST_OPTIONS.lat = position.latitude;
  REQUEST_OPTIONS.lon = position.longitude;

  const options = new URLSearchParams(REQUEST_OPTIONS);
  return await fetch(`${BASE_URL}${options}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export async function getDefaultWeather() {
  const options = new URLSearchParams(REQUEST_OPTIONS);
  return await fetch(`${BASE_URL}${options}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
