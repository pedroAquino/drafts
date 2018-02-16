// Result: https://app.codility.com/demo/results/trainingWXF3W8-TCM/
// Score: 80% 

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counter = 0;
    let maxCounter = 0;
    
    while (N >= 1) {
        if (N % 2 == 0) {
            counter++;
        } else {
            if (counter > maxCounter) {
                maxCounter = counter;
            }
            counter = 0;
        }
        N = Math.floor(N / 2);
    }
    
    return maxCounter;
}
