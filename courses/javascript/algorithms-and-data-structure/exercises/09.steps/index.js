// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        0.396s, estimated 1s
function solution1(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let col = 1; col <= n; col++) {
      if (col <= row) {
        str += "#";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        0.428s, estimated 1s
function solution2(n, row = 1, str = "") {
  if (row > n) {
    return;
  }

  if (str.length == n) {
    console.log(str);
    row = row + 1;
    str = "";
  } else {
    if (str.length < row) {
      str += "#";
    } else {
      str += " ";
    }
  }

  solution2(n, row, str);
}

function steps(n) {
  solution2(n);
}

module.exports = steps;
