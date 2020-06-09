'use strict';

const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};

// Find the Start and End of Words with Regular Expression Word Boundaries

var str = `This island is his, it is.`;

// matches words ending and finishing with "is"
const regex =  /\bis\b/g;

// matches words that starts with "is"
const regex2 =  /\bis/g;

// matches words that ends with "is"
const regex2 =  /is\b/g;

// all of those conditions can be negated using \B (upper case B) instead of lower case

output(
  str,
  regex,
  document.querySelector('pre')
);