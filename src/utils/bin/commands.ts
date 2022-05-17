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

export const mail = async (args: string[]): Promise<void> => {
  window.open(`https://mail.google.com/mail/u/0/#inbox`, "_self").focus();
};

export const email = async (args: string[]): Promise<void> => {
  window.open(`https://mail.google.com/mail/u/0/#inbox`, "_self").focus();
};

export const gmail = async (args: string[]): Promise<void> => {
  window.open(`https://mail.google.com/mail/u/0/#inbox`, "_self").focus();
};

export const gm = async (args: string[]): Promise<void> => {
  window.open(`https://mail.google.com/mail/u/0/#inbox`, "_self").focus();
};

export const outlook = async (args: string[]): Promise<void> => {
  window.open(`https://outlook.office365.com/mail/`, "_self").focus();
};

export const ol = async (args: string[]): Promise<void> => {
  window.open(`https://outlook.office365.com/mail/`, "_self").focus();
};

export const wolfy = async (args: string[]): Promise<void> => {
  window.open(`https://wolfy.net/play`, "_self").focus();
};

export const jklm = async (args: string[]): Promise<void> => {
  window.open(`https://jklm.fun/`, "_self").focus();
};

export const squiz = async (args: string[]): Promise<void> => {
  window.open(`https://squiz.gg/`, "_self").focus();
};

export const squizz = async (args: string[]): Promise<void> => {
  window.open(`https://squiz.gg/`, "_self").focus();
};

export const epitech = async (args: string[]): Promise<void> => {
  window.open(`https://intra.epitech.eu/`, "_self").focus();
};

export const intra = async (args: string[]): Promise<void> => {
  window.open(`https://intra.epitech.eu/`, "_self").focus();
};

export const planning = async (args: string[]): Promise<void> => {
  window.open(`https://intra.epitech.eu/planning/#!/`, "_self").focus();
};

export const logtime = async (args: string[]): Promise<void> => {
  window.open(`https://intra.epitech.eu/user/#!/netsoul`, "_self").focus();
};

export const delivery = async (args: string[]): Promise<void> => {
  window.open(`https://github.com/EpitechPromo2026`, "_self").focus();
};

export const del = async (args: string[]): Promise<void> => {
  window.open(`https://github.com/EpitechPromo2026`, "_self").focus();
};

export const my = async (args: string[]): Promise<void> => {
  window.open(`https://my.epitech.eu/index.html#y/`, "_self").focus();
};

export const trad = async (args: string[]): Promise<void> => {
  window.open(`https://translate.google.com/`, "_self").focus();
};

export const sutom = async (args: string[]): Promise<void> => {
  window.open(`https://sutom.nocle.fr/`, "_self").focus();
};

export const tusmo = async (args: string[]): Promise<void> => {
  window.open(`http://www.tusmo.xyz`, "_self").focus();
};

// Search

export const github = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://github.com/`, "_self").focus();
  } else {
    window.open(`https://github.com/search?q=${args.join(' ')}`, "_self").focus();
  }
};

export const gh = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://github.com/`, "_self").focus();
  } else {
    window.open(`https://github.com/search?q=${args.join(' ')}`, "_self").focus();
  }
};

export const linkedin = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://www.linkedin.com/`, "_self").focus();
  } else {
    window.open(`https://www.linkedin.com/search/results/all/?keywords=${args.join(' ')}/`, "_self").focus();
  }
};

export const google = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://google.com/`, "_self").focus();
  } else {
    window.open(`https://google.com/search?q=${args.join(' ')}`, "_self").focus();
  }
};

export const g = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://google.com/`, "_self").focus();
  } else {
    window.open(`https://google.com/search?q=${args.join(' ')}`, "_self").focus();
  }
};

export const duckduckgo = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://duckduckgo.com/`, "_self").focus();
  } else {
    window.open(`https://duckduckgo.com/?q=${args.join(' ')}`, "_self").focus();
  }
};

export const bing = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://bing.com/`, "_self").focus();
  } else {
    window.open(`https://bing.com/search?q=${args.join(' ')}`, "_self").focus();
  }
};

export const reddit = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://www.reddit.com/`, "_self").focus();
  } else {
    window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`, "_self").focus();
  }
};

export const youtube = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://youtube.com/`, "_self").focus();
  } else {
    window.open(`https://youtube.com/results?search_query=${args.join(' ')}`, "_self").focus();
  }
};

export const yt = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://youtube.com/`, "_self").focus();
  } else {
    window.open(`https://youtube.com/results?search_query=${args.join(' ')}`, "_self").focus();
  }
};

export const ytb = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://youtube.com/`, "_self").focus();
  } else {
    window.open(`https://youtube.com/results?search_query=${args.join(' ')}`, "_self").focus();
  }
};


export const maps = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://www.google.com/maps`, "_self").focus();
  } else {
    window.open(`https://www.google.com/maps?q=${args.join(' ')}`, "_self").focus();
  }
};

export const m = async (args: string[]): Promise<void> => {
  if (args.length === 0) {
    window.open(`https://www.google.com/maps`, "_self").focus();
  } else {
    window.open(`https://www.google.com/maps?q=${args.join(' ')}`, "_self").focus();
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
