// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// Test Suites: 1 passed, 1 total
// Tests:       6 passed, 6 total
// Snapshots:   0 total
// Time:        1.78s, estimated 3s
function fibIterative(n) {
    let sequence = [0,1];
    for (let i=2; i<=n; i++) {
        const nextEntry = sequence[i-1] + sequence[i-2];
        sequence.push(nextEntry);
    }
    return sequence[sequence.length-1];
}


function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
    
        return result;
    }
}


function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}

fib = memoize(fib);

module.exports = fib;
