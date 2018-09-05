// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        0.365s, estimated 4s
function solution1(str) {
    const vowels = [ 'a', 'e', 'i', 'o', 'u' ];

    return str.split('')
        .filter(
            char => vowels.find(
                item => item.toUpperCase() === char.toUpperCase()
            )
        ).length;
}

// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        0.701s, estimated 1s
function solution2(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            counter++;
        }
    }

    return counter;
}

// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        0.488s, estimated 1s
function solution3(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

function vowels(str) {
    //return solution1(str);
    //return solution2(str);
    return solution3(str);
}

module.exports = vowels;
