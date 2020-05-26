'use strict';

const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};

const str = 'Pedro Aquino';

const regex = /ro/gi;

output(
  str,
  regex,
  document.querySelector('pre')
);