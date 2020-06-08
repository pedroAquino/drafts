'use strict';

const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};

// 1 - Get Started with Regular Expressions in JavaScript
// const str = 'Pedro Aquino';
// const regex = /ro/gi;

// Find Plain Text Patterns using Regular Expressions
const str = `AEIOU - aeiou - $1000 - 55.5%`;

const regex = /[\D]/g;

// Use Regular Expressions to Find Repeated Patterns

output(
  str,
  regex,
  document.querySelector('pre')
);