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

function reverseStr(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

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
      console.log(`n=${n} str=${str}`);
      str += "#";
    }
    //console.log(reverseStr(str));
    str = "";
  }
}

module.exports = steps;
