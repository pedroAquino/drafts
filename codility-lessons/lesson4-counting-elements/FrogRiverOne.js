// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// RESULTADO:
// https://app.codility.com/demo/results/trainingJDW9GH-SGN/
// 90 % \O/

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let positions = [];
    for (let i = 1; i <= X; i++) {
        positions.push(i);
    }

    for (let j = 0; j < A.length; j++) {
        let index = positions.indexOf(A[j]);
        if (index != -1) {
            positions.splice(index, 1);
            if (positions.length == 0) {
                return j;
            }
        }
    }
    
    return -1;
}
