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
  var str = "";
  for (let i = 1; i <= n; i++) {
    for (let x = 1; x <= n; x++) {
      const blankSpaces = n - x;
      let count = 1;
      while (count < blankSpaces) {
        str += " ";
        count++;
      }
      str += "#";
    }
    console.log(
      str
        .split("")
        .reverse()
        .join("")
    );
    str = "";
  }
}

module.exports = steps;
