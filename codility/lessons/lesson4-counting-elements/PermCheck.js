//PROBLEM AND SCORE:
// https://app.codility.com/demo/results/trainingDYH7MQ-KH3/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let length = A.length;
    A = A.sort((a,b) => a-b);
    
    for (let i = 0; i < length; i++) {
        if (A[i] != (i + 1)) {
            return 0;
        }
    }

    return 1;
}
