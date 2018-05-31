// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        1.374s
function solution1(array, size) {

  let result = [];
  let arrayItem = [];

  for (let item of array) {
    if (arrayItem.length < size) {
      arrayItem.push(item);
    } else {
      result.push(arrayItem);
      arrayItem = [];
      arrayItem.push(item);
    }
  }

  result.push(arrayItem);

  return result;

}

// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        1.359s
function solution2(array, chunckSize) {
  let result = [];
  const resultSize = Math.ceil(array.length / chunckSize);
  const arrayLength = array.length;

  for (let i = 0; i<resultSize; i++) result.push([]);

  for (let i = 0; i<resultSize;) {
      for (let z = 0; z<arrayLength;) {
          while(result[i].length < chunckSize && array[z]) {
              result[i].push(array[z]);
              z++;
          }
          i++;
      }
  }

  return result;
}

//STEPHEN'S SOLUTION #1
// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        1.362s
function solution3(array, chunckSize) {
  const chunked = [];

  for (let item of array) {
    const last = chunked[chunked.length-1];
    if (!last || last.length == chunckSize) {
      chunked.push([item]);
    } else {
      last.push(item);
    }
  }

  return chunked;
}

//STEPHEN'S SOLUTION #2
// Test Suites: 1 passed, 1 total
// Tests:       5 passed, 5 total
// Snapshots:   0 total
// Time:        1.371s
function solution4(array, chunckSize) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const jump = index+chunckSize;
    chunked.push(array.slice(index, jump));
    index = jump;
  }

  return chunked;
}


function chunk(array, size) {
  //return solution1(array, size);
  //return solution2(array, size);
  //return solution3(array, size);
  return solution4(array, size);
}

module.exports = chunk;
