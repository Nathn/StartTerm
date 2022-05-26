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
  const weather = await getWeather(city, 'en');
  return weather;
};

export const meteo = async (args: string[]): Promise<string> => {
  var city = args.join('+');
  city = city.charAt(0).toUpperCase() + city.slice(1);
  if (!city) {
    city = 'Nice';
  }
  const weather = await getWeather(city, 'fr');
  return weather;
};

export const wikipedia = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://fr.wikipedia.org`, "_self").focus();
  } else {
    if (args[0] == "en") {
      if (args.length === 1) {
        window.open(`https://en.wikipedia.org`, "_self").focus();
      } else {
        args.shift();
        fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${args.join('+')}&format=json&origin=*`).then(response => response.json()).then(data => {
          window.open(`https://en.wikipedia.org/wiki/${data[1][0]}`, "_self").focus();
        });
      }
    } else {
      fetch(`https://fr.wikipedia.org/w/api.php?action=opensearch&search=${args.join('+')}&format=json&origin=*`).then(response => response.json()).then(data => {
        window.open(`https://fr.wikipedia.org/wiki/${data[1][0]}`, "_self").focus();
      });
    }
  }
};

export const wiki = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://fr.wikipedia.org`, "_self").focus();
  } else {
    if (args[0] == "en") {
      if (args.length === 1) {
        window.open(`https://en.wikipedia.org`, "_self").focus();
      } else {
        args.shift();
        fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${args.join('+')}&format=json&origin=*`).then(response => response.json()).then(data => {
          window.open(`https://en.wikipedia.org/wiki/${data[1][0]}`, "_self").focus();
        });
      }
    } else {
      fetch(`https://fr.wikipedia.org/w/api.php?action=opensearch&search=${args.join('+')}&format=json&origin=*`).then(response => response.json()).then(data => {
        window.open(`https://fr.wikipedia.org/wiki/${data[1][0]}`, "_self").focus();
      });
    }
  }
};

export const w = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://fr.wikipedia.org`, "_self").focus();
  } else {
    if (args[0] == "en") {
      if (args.length === 1) {
        window.open(`https://en.wikipedia.org`, "_self").focus();
      } else {
        args.shift();
        fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${args.join('+')}&format=json&origin=*`).then(response => response.json()).then(data => {
          window.open(`https://en.wikipedia.org/wiki/${data[1][0]}`, "_self").focus();
        });
      }
    } else {
      fetch(`https://fr.wikipedia.org/w/api.php?action=opensearch&search=${args.join('+')}&format=json&origin=*`).then(response => response.json()).then(data => {
        window.open(`https://fr.wikipedia.org/wiki/${data[1][0]}`, "_self").focus();
      });
    }
  }
};
