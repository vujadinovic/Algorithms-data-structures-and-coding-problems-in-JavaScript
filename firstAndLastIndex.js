// problem url:
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// Given an array of integers called nums sorted in ascending order,
// find the starting and ending position of a given target value.

// binary search helper function
function binarySearch(arr, val) {
    let position = arr.length;
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (arr[m] >= val) {
            // notice that this will give us first index of target number or closest bigger one
            position = m;
            r = m - 1;
        } else l = m + 1;
    }
    return position;
}

// function that solves it
const searchRange = function (nums, target) {
    // first search for first occurance of the number, which is what binary search function does currently
    let first = binarySearch(nums, target);
    // then search for first index of number greater than target number, remember that this will give us even the closest bigger one
    let last = binarySearch(nums, target + 1) - 1;
    if (first <= last) return [first, last];
    return [-1, -1];
};
