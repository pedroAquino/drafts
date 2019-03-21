// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Better solution using slice
function chunk(array, size) {
    let counter = 0;
    let result = [];
    while (counter < array.length) {
        result.push(array.slice(counter, counter + size));
        counter+=size;
    }
    return result;
}

function solution1(array, size) {
    let counter = 0;
    let result = [];
    let chunk = [];
    while (counter < array.length) {
        while (chunk.length < size && array[counter]) {
            chunk.push(array[counter]);
            counter++;
        }
        result.push(chunk);
        chunk = [];
    }

    return result;
}

module.exports = chunk;
