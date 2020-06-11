'use strict';

const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};

// Find Patterns at the Start and End of Lines with Line Anchors in Regular Expressions
const str = `12/1/16
12-16-13
11/12/16
12-12-2016`;

var regex = /^12.+16$/gm;

output(
  str,
  regex,
  document.querySelector('pre')
);