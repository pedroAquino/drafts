'use strict';

const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
};

// Use Lookaheads in Regular Expressions

var str = `foo
foobar
foobaz
fooboo`;

// capture foo where it`s followed by bar or boo
const regex = /foo(?=bar|boo)/g;

// capture foo where it`s NOT followed by bar or boo
const regex2 = /foo(?!bar|boo)/g;

output(
  str,
  regex,
  document.querySelector('pre')
);