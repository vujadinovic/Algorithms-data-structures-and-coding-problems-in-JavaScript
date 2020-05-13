function binarySearch(arr, val) {
    let l = arr[0];
    let r = arr[arr.length - 1];
    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (arr[m] === val) return m;
        if (arr[m] < val) l = m + 1;
        else r = m - 1;
    }
    return -1;
}
