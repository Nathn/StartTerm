import axios from 'axios';
import config from '../../config.json';

export const getWeather = async (city: string, lang: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm&lang=${lang}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};
