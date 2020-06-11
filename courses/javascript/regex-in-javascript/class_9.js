'use strict';

const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};

// Match the Same String Twice with Backreferences in Regular Expressions

// Example 1
//const str = `It was the the thing`;

// here we are finding wherever "the" followed by itself
//const regex = /(\w+)\s?(?=\1)/g


// Example 2
const str = '<b>Bold</b><i>italics</i>';

const regex = /<(\w+)>(.*)<\/\1>/g;

console.log(str.replace(regex, '$2\n'));

output(
  str,
  regex,
  document.querySelector('pre')
);