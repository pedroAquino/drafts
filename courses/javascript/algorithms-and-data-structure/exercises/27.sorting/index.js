// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

    for (let i=0; i<arr.length; i++) {
        
        for(let j=0; j<(arr.length-i); j++) {
            const current = arr[j];
            const next = arr[j+1];

            if (current > next) {
                arr[j+1] = current;
                arr[j] = next;
            }
        }
    }

    return arr;
};

function selectionSort(arr) {
    for (let i=0; i<arr.length; i++) {
        let indexOfMin = i;
        
        for (let j=i+1; j<arr.length; j++) {
            
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if (i !== indexOfMin) {
            const min = arr[indexOfMin];
            const current = arr[i];
    
            arr[i] = min;
            arr[indexOfMin] = current;
        }
    }
    
    return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
