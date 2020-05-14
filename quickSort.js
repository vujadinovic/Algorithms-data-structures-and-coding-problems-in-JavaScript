// pivot function that returns index of chosen element compared to other elements in the array
// all smaller values are to the left, and bigger ones to the right
// O(n) time complexity for this function alone
function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIndex = start; // variable to keep track on where to put the chosen element
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]; // swapping smaller value and current swapIndex
        }
    }
    [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]]; // placing the chosen element in his place
    return swapIndex;
}

// quickSort function that recursively calls itself until left and right index are equal

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1); // recursive call for left side
        quickSort(arr, pivotIndex + 1, right); // recursive call for right side
    }
    return arr;
}

// best and average time complexity is O(nlogn)
// worst is O(n^2) which happens when pivot chosen is every single time minimum or maximum element
// can't 100% escape it but we can pick median or random array element in case array is already sorted
