// Regular expressions

// My string
const str = 'Pedro Aquino Mauro';

// Create a regex with the pattern I want to apply to the string
const regex = new RegExp('ro');

// Create regex using a literal
const regex2 = /ro/g; // => This is equivalent to the variable "regex"

// test
// console.log('regex.test :::: ',  regex.test(str)); // => Returns true
// console.log('regex2.test :::: ',  regex2.test(str)); // => Returns true

// exec (give more information about the result)
// if we add the "g" flag on the regex it becomes "state aware"
// console.log('regex2.exec :::: ', regex2.exec(str)) // => returns index 3
// console.log('regex2.exec :::: ', regex2.exec(str)) // => returns index 16
// console.log('regex2.exec :::: ', regex2.exec(str)) // => returns null

// Using regex from the JS String prototype
console.log('str.match(regex) :::: ', str.match(regex2)) // => returns ["ro", "ro"]
console.log('str.replace(regex) :::: ', str.replace(regex2, 'XX')) // => returns PedXX Aquino MauXX
console.log('str.search(regex) :::: ', str.search(regex2)) // => returns 3