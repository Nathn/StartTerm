import React from 'react';
import * as bin from './bin';

function isValidURL(string) {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const args = command.split(' ');
  args[0] = args[0].toLowerCase();

  if (args[0] === 'clear') {
    clearHistory();
    setCommand('');
  } else if (command === '') {
    setHistory('');
    setCommand('');
  } else if (Object.keys(bin).indexOf(args[0]) === -1) {
    if (isValidURL(command)) {
      var url = command
      if (!url.match(/^https?:\/\//i)) {
          url = 'http://' + url;
      }
      await window.open(url, "_self").focus();
      setHistory('Opening ' + url + '...');
    } else {
      await window.open(`https://google.com/search?q=${args.join(' ')}`, "_self").focus();
    }
  } else {
    const output = await bin[args[0]](args.slice(1));
    setHistory(output);
    setCommand('');
  }
};
