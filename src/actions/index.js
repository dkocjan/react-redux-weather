import axios from 'axios';

const API_KEY = 'ec9083cf3f3aa22be2d514d9610e70fb';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  // console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}