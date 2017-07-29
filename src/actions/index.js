import axios from 'axios';

const API_KEY = '2c52a6d135a9c48d09b9456cb2e0d8af';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; //convention to have variable type defined here as const not string

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request 
    };
}