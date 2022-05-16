// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
`;
};

export const o = async (args: string[]): Promise<void> => {
  if (args.length !== 0) {
    var url = args.join(' ')
    if (!url.match(/^https?:\/\//i)) {
        url = 'http://' + url;
    }
    window.open(url, "_self");
  }
};

export const mail = async (args: string[]): Promise<void> => {
  window.open(`https://mail.google.com/mail/u/0/#inbox`, "_self");
};

export const email = async (args: string[]): Promise<void> => {
  window.open(`https://mail.google.com/mail/u/0/#inbox`, "_self");
};

export const gmail = async (args: string[]): Promise<void> => {
  window.open(`https://mail.google.com/mail/u/0/#inbox`, "_self");
};

export const gm = async (args: string[]): Promise<void> => {
  window.open(`https://mail.google.com/mail/u/0/#inbox`, "_self");
};

export const outlook = async (args: string[]): Promise<void> => {
  window.open(`https://outlook.office365.com/mail/`, "_self");
};

export const ol = async (args: string[]): Promise<void> => {
  window.open(`https://outlook.office365.com/mail/`, "_self");
};

export const wolfy = async (args: string[]): Promise<void> => {
  window.open(`https://wolfy.net/play`, "_self");
};

export const jklm = async (args: string[]): Promise<void> => {
  window.open(`https://jklm.fun/`, "_self");
};

export const squiz = async (args: string[]): Promise<void> => {
  window.open(`https://squiz.gg/`, "_self");
};

export const squizz = async (args: string[]): Promise<void> => {
  window.open(`https://squiz.gg/`, "_self");
};

export const epitech = async (args: string[]): Promise<void> => {
  window.open(`https://intra.epitech.eu/`, "_self");
};

export const intra = async (args: string[]): Promise<void> => {
  window.open(`https://intra.epitech.eu/`, "_self");
};

export const planning = async (args: string[]): Promise<void> => {
  window.open(`https://intra.epitech.eu/planning/#!/`, "_self");
};

export const logtime = async (args: string[]): Promise<void> => {
  window.open(`https://intra.epitech.eu/user/#!/netsoul`, "_self");
};

export const delivery = async (args: string[]): Promise<void> => {
  window.open(`https://github.com/EpitechPromo2026`, "_self");
};

export const del = async (args: string[]): Promise<void> => {
  window.open(`https://github.com/EpitechPromo2026`, "_self");
};

export const my = async (args: string[]): Promise<void> => {
  window.open(`https://my.epitech.eu/index.html#y/`, "_self");
};

export const trad = async (args: string[]): Promise<void> => {
  window.open(`https://translate.google.com/`, "_self");
};

// Search

export const github = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://github.com/`, "_self");
  } else {
    window.open(`https://github.com/search?q=${args.join(' ')}`, "_self");
  }
};

export const gh = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://github.com/`, "_self");
  } else {
    window.open(`https://github.com/search?q=${args.join(' ')}`, "_self");
  }
};

export const linkedin = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://www.linkedin.com/`, "_self");
  } else {
    window.open(`https://www.linkedin.com/search/results/all/?keywords=${args.join(' ')}/`, "_self");
  }
};

export const google = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://google.com/`, "_self");
  } else {
    window.open(`https://google.com/search?q=${args.join(' ')}`, "_self");
  }
};

export const g = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://google.com/`, "_self");
  } else {
    window.open(`https://google.com/search?q=${args.join(' ')}`, "_self");
  }
};

export const duckduckgo = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://duckduckgo.com/`, "_self");
  } else {
    window.open(`https://duckduckgo.com/?q=${args.join(' ')}`, "_self");
  }
};

export const bing = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://bing.com/`, "_self");
  } else {
    window.open(`https://bing.com/search?q=${args.join(' ')}`, "_self");
  }
};

export const reddit = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://www.reddit.com/`, "_self");
  } else {
    window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`, "_self");
  }
};

export const youtube = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://youtube.com/`, "_self");
  } else {
    window.open(`https://youtube.com/results?search_query=${args.join(' ')}`, "_self");
  }
};

export const yt = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://youtube.com/`, "_self");
  } else {
    window.open(`https://youtube.com/results?search_query=${args.join(' ')}`, "_self");
  }
};

export const ytb = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://youtube.com/`, "_self");
  } else {
    window.open(`https://youtube.com/results?search_query=${args.join(' ')}`, "_self");
  }
};


export const maps = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://www.google.com/maps`, "_self");
  } else {
    window.open(`https://www.google.com/maps?q=${args.join(' ')}`, "_self");
  }
};

export const m = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://www.google.com/maps`, "_self");
  } else {
    window.open(`https://www.google.com/maps?q=${args.join(' ')}`, "_self");
  }
};

export const wikipedia = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://fr.wikipedia.org`, "_self");
  } else {
    if (args[0] == "en") {
      if (args.length === 1) {
        window.open(`https://en.wikipedia.org`, "_self");
      } else {
        window.open(`https://en.wikipedia.org/wiki/${args.slice(1).join('_')}`, "_self");
      }
    } else {
      window.open(`https://fr.wikipedia.org/wiki/${args.join('_')}`, "_self");
    }
  }
};

export const wiki = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://fr.wikipedia.org`, "_self");
  } else {
    if (args[0] == "en") {
      if (args.length === 1) {
        window.open(`https://en.wikipedia.org`, "_self");
      } else {
        window.open(`https://en.wikipedia.org/wiki/${args.slice(1).join('_')}`, "_self");
      }
    } else {
      window.open(`https://fr.wikipedia.org/wiki/${args.join('_')}`, "_self");
    }
  }
};

export const w = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://fr.wikipedia.org`, "_self");
  } else {
    if (args[0] == "en") {
      if (args.length === 1) {
        window.open(`https://en.wikipedia.org`, "_self");
      } else {
        window.open(`https://en.wikipedia.org/wiki/${args.slice(1).join('_')}`, "_self");
      }
    } else {
      window.open(`https://fr.wikipedia.org/wiki/${args.join('_')}`, "_self");
    }
  }
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const time = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const datetime = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ███████████  ███                     ███████████
  ░░███░░░░░░█ ░░░                     ░░███░░░░░░█
   ░███   █ ░  ████  ████████   ██████  ░███   █ ░   ██████  █████ █████
   ░███████   ░░███ ░░███░░███ ███░░███ ░███████    ███░░███░░███ ░░███
   ░███░░░█    ░███  ░███ ░░░ ░███████  ░███░░░█   ░███ ░███ ░░░█████░
   ░███  ░     ░███  ░███     ░███░░░   ░███  ░    ░███ ░███  ███░░░███
   █████       █████ █████    ░░██████  █████      ░░██████  █████ █████
  ░░░░░       ░░░░░ ░░░░░      ░░░░░░  ░░░░░        ░░░░░░  ░░░░░ ░░░░░

`;
};
