'use strict';

const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};

// 1 - Get Started with Regular Expressions in JavaScript
// const str = 'Pedro Aquino';
// const regex = /ro/gi;

// Find Plain Text Patterns using Regular Expressions
const str = `
  http://egghead.io
  not a web adddress
  http://
  https://www.egghead.io
`;

const regex = /https{0,}:\/\/.{1,}/g;

// Use Regular Expressions to Find Repeated Patterns

output(
  str,
  regex,
  document.querySelector('pre')
);