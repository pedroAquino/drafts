// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// Result: https://app.codility.com/demo/results/trainingPGX3NF-KGM/
// Score: 75 %

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counter = 0;
    let steps = 1;
    let number = A;

    while (number <=B) {
        
        if (steps > 1) {
            counter++;
            number += steps;
            continue;
        }
        
        if ((number % K) == 0) {
            counter++;
            steps = K;
        }
        
        number += steps;
    }
    
    return counter;
}