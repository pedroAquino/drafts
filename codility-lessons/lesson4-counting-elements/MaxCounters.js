// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// https://app.codility.com/demo/results/training5QC37U-AZP/
// 66%

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counters = [];
    for (let i = N; i--;) {
        counters.push(0);
    }
    
    let ALength = A.length;
    let NPlusOne = N + 1;
    
    for (j = 0; j < ALength; j++) {
        if (A[j] >= 1 && A[j] <= N) {
            counters[A[j] - 1]++;
        } else if (A[j] == NPlusOne) {
            let max = Math.max.apply(Math, counters);
            counters = counters.map(() => max);
        }
    }
    
    return counters;
}
