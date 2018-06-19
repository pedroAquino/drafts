// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function crateObjectMap(word) {
  const Obj = {};

  for (let char of word) {
    Obj[char] = Obj[char] ? Obj[char]++ : 1;
  }

  return Obj;
}

function anagrams(stringA, stringB) {
  const regex = /[^\w]/g;
  const A = stringA.replace(regex, "").toLowerCase();
  const B = stringB.replace(regex, "").toLowerCase();

  const AObj = crateObjectMap(A);
  const BObj = crateObjectMap(B);

  if (Object.keys(AObj).length != Object.keys(BObj).length) {
    return false;
  } else {
    //   let result = true;
    //   for (let key in AObj) {
    //       if (key != )
    //   }
  }
}

module.exports = anagrams;

// /[^\w]/
