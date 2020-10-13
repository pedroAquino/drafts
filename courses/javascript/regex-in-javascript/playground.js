'use strict';

const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};

// Find Patterns at the Start and End of Lines with Line Anchors in Regular Expressions
const str = `1123.456.abc.def`;

var regex = /ˆ.{3}\.$/g;

output(
  str,
  regex,
  document.querySelector('pre')
);