// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// Result: https://app.codility.com/demo/results/trainingPCWTEA-H8T/
// Score: 55%

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let length = A.length;
    for (let i = 0; i<length; i++) {
        let array = A.filter((value) => value == A[i]);
        if (array.length == 1) {
            return array[0];
        }
    }
}
