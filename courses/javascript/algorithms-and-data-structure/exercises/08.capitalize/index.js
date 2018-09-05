// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// SOLUTION #1
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.411s, estimated 1s
function solution1(str) {
  return str
    .split(" ")
    .map(word => word.split("")[0].toUpperCase() + word.slice(1) + " ")
    .join("")
    .trim();
}

// SOLUTION #2
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.639s, estimated 1s
function solution2(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

function capitalize(str) {
  //return solution1(str);
  return solution2(str);
}

module.exports = capitalize;
