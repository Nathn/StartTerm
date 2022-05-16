// // List of commands that require API calls

import { getQuote } from '../api';
import { getWeather } from '../api';

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather paris';
  }
  const weather = await getWeather(city);
  return weather;
};

export const meteo = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: meteo [city]. Example: meteo paris';
  }
  const weather = await getWeather(city);
  return weather;
};
