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

// recursive
function fizzBuzz(n, counter=1) {
    let print = '';
    if ((counter % 3) === 0)
      print+='fizz';

    if ((counter % 5) === 0)
      print+='buzz';
    
    if (print) {
      console.log(print);
    } else {
      console.log(counter);
    }
  
    if (counter < n) {
      counter++;
      fizzBuzz(n, counter);
    }
}


// normal solution
function solution1(n) {
  let counter = 1;
  
  while(counter <= n) {
    let print = '';
    if ((counter % 3) === 0)
      print+='fizz';

    if ((counter % 5) === 0)
      print+='buzz';
    
    if (print) {
      console.log(print);
    } else {
      console.log(counter);
    }
    
    print = '';
    counter++;
  }
  
}

module.exports = fizzBuzz;
