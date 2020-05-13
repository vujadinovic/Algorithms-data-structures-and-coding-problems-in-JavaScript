function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currVal; j--) {
            // var to escape the scope
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currVal;
    }
    return arr;
}

// good for almost sorted arrays, use case may be when data is coming in live and needs to be sorted
// constant space complexity
