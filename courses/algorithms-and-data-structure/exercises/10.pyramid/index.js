// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        2.232s
function solution1(n) {
  let cols = n + (n - 1);
  let midPoint = Math.floor(cols / 2);
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < cols; column++) {
      if (midPoint - row <= column && midPoint + row >= column) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}


// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        2.231s
function solution2(n, row = 0, level = '') {
  if (row === n) {
      return;
  }
  const colsNumber = 2 * n - 1;

  if (level.length === colsNumber) {
      console.log(level);
      return solution2(n, row + 1);
  }

  const midpoint = Math.floor(colsNumber / 2);

  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
      add = '#';
  } else {
      add = ' ';
  }

  solution2(n, row, level + add);

}

function pyramid(n) {
  //solution1(n);
  solution2(n);
}

module.exports = pyramid;
