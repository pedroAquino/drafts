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

function steps(n) {
  const arr = [];
  let arrItem = [];

  for (let i = 1; i <= n; i++) {
    for (let x = 1; x <= n; x++) {
      const blanks = n - x;
      if (x <= blanks) {
        arrItem.push("#");
      } else {
        arrItem.push(" ");
      }
    }
    arr.push(arrItem);
    arrItem = [];
  }

  console.log(arr);
}

module.exports = steps;
