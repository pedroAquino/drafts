// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// result: https://app.codility.com/demo/results/trainingDYY2RK-HT3/
// Got solution from here: https://stackoverflow.com/questions/30724992/missinginteger-codility-javascript


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    var min = 1;
    
    A.sort((a,b) => a-b);

    for (var i in A) {
        if (A[i] > -1 && A[i] == min) {
                min++;
        }
    }

    return min;
}
