'use strict';

const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};

// Create Capture Groups in Regular Expressions

const str = `800-456-7890
(555) 456-7890
4564567890`;

const regex = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;

console.log(
  str.replace(regex, 'area code: $1')
);

output(
  str,
  regex,
  document.querySelector('pre')
);