// // List of commands that require API calls

import { getQuote } from '../api';
import { getWeather } from '../api';

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const weather = async (args: string[]): Promise<string> => {
  var city = args.join('+');
  city = city.charAt(0).toUpperCase() + city.slice(1);
  if (!city) {
    city = 'Nice';
  }
  const weather = await getWeather(city);
  return weather;
};

export const meteo = async (args: string[]): Promise<string> => {
  var city = args.join('+');
  city = city.charAt(0).toUpperCase() + city.slice(1);
  if (!city) {
    city = 'Nice';
  }
  const weather = await getWeather(city);
  return weather;
};
