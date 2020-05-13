// function that merges two sorted arrays
// to be called in mergeSort function
// time complexity of this finction is O(n)
function mergeArrs(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

// mergeSort function, recursively dividing arrays till they are 1 or 0 elements long
// then merging them using mergeArrs function
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid)); // up to this part time complexity is O(log n)
    return mergeArrs(left, right);
}

// pretty quick, O(nlog n) time complexity overall, doesn't have any edge cases where it does better like bubble or insertion sort
// O(n) space complexity
// best we can do on data agnostic sorting is actually O(nlog n)

