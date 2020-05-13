function selectionSort(arr) {
    const swap = (arr, ind1, ind2) =>
        ([arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]);

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i !== min) swap(arr, i, min);
    }
    return arr;
}

// doesn't perform well, survives beacause it's very teachable (simple to understand)
// constant space complexity
