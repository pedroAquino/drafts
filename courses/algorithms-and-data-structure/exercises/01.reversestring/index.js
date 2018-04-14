// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION #3
// turn str in array calling split('')
// use reduce helper to iterate over the array
// concat each char in the array with the reversed acumulator
function reverse(str) {
    return str.split('')
        .reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

// SOLUTION #1
// turn str into array, call array.reverse() on array, join back into a string
//function reverse(str) {
//    return str.split('').reverse().join('')
//}

// SOLUTION #2
// start a variable called reversed with an empty string
// iterate over the given str string
// concat each character of str with reversed
//function reverse(str) {
//    let reversed = '';

//    for (let char of str) {
//        reversed = char + reversed;
//    }

//    return reversed;
//}