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
function solution1(n) {
    let sequence = [0,1];
    for (let i=2; i<=n; i++) {
        const nextEntry = sequence[i-1] + sequence[i-2];
        sequence.push(nextEntry);
    }
    return sequence[sequence.length-1];
}

function solution2(n) {
    if (n < 2) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}


function fib(n) {
    return solution2(n);
}

module.exports = fib;
