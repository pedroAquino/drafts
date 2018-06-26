// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SOLUTION #1
// clean string, create char maps, iterate and compare
// Test Suites: 1 passed, 1 total
// Tests:       6 passed, 6 total
// Snapshots:   0 total
// Time:        0.445s, estimated 1s
function solution1(stringA, stringB) {
  const regex = /[^\w]/g;
  const A = stringA.replace(regex, "").toLowerCase();
  const B = stringB.replace(regex, "").toLowerCase();

  const crateObjectMap = word => {
    const Obj = {};

    for (let char of word) {
      Obj[char] = Obj[char] ? Obj[char]++ : 1;
    }

    return Obj;
  };

  const AObj = crateObjectMap(A);
  const BObj = crateObjectMap(B);

  const AKeys = Object.keys(AObj);
  const BKeys = Object.keys(BObj);
  let result = true;

  if (AKeys.length != BKeys.length) {
    result = false;
  } else {
    for (let key of AKeys) {
      if (AObj[key] != BObj[key]) {
        result = false;
      }
    }
  }

  return result;
}

function cleanStr(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

// Test Suites: 1 passed, 1 total
// Tests:       6 passed, 6 total
// Snapshots:   0 total
// Time:        0.406s, estimated 1s
function solution2(stringA, stringB) {
  return cleanStr(stringA) == cleanStr(stringB);
}

function anagrams(stringA, stringB) {
  //return solution1(stringA, stringB);
  return solution2(stringA, stringB);
}

module.exports = anagrams;
