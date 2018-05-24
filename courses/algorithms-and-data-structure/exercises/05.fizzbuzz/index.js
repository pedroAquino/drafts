// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  const isMultipleOf = (number, multiple) => {
    return number % multiple === 0;
  };

  for (let i = 1; i <= n; i++) {
    let print = "";

    if (isMultipleOf(i, 3)) {
      print += "fizz";
    }

    if (isMultipleOf(i, 5)) {
      print += "buzz";
    }

    print = print ? print : i;

    console.log(print);
  }
}

module.exports = fizzBuzz;
