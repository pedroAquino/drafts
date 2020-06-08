'use strict';

const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};

// 1 - Get Started with Regular Expressions in JavaScript
// const str = 'Pedro Aquino';
// const regex = /ro/gi;

// Find Plain Text Patterns using Regular Expressions
const str = `cat mat bat Hat ?at 0at`;

const regex = /[]at/g;

// Use Regular Expressions to Find Repeated Patterns

output(
  str,
  regex,
  document.querySelector('pre')
);