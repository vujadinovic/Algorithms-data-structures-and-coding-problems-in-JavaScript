// Radix Sort is really unique sorting algorithm considering the fact
// that it never makes comparisons, no < or >

// helper function 1 that will get digit with the index of i  (from right)
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// helper function 2 that gets number of digits in the number
function digitsCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//  helper function 3 that loops over given numbers and returns highest digit count
function mostDigits(nums) {
    let maxDigits = 0;
    for (let index in nums) {
        maxDigits = Math.max(maxDigits, digitsCount(nums[index]));
    }
    return maxDigits;
}

// actual radix function
function radixSort(nums) {
    const mostDigitsCount = mostDigits(nums); // get the most digits of given numbers
    for (let k = 0; k < mostDigitsCount; k++) {
        // loop over each number's digits
        let buckets = Array.from({ length: 10 }, () => []); // create empty buckets with indexes as digit holders
        for (let index in nums) {
            // loop over numbers, with each digit
            const digit = getDigit(nums[index], k); // get digit at that particular place we are in in loop
            buckets[digit].push(nums[index]); // push it to buckets
        }
        nums = [].concat(...buckets); // not using .concat(buckets) because that will leave us with another array of arrays
    }
    return nums;
}

// O (nk) generally but if we are dealing with all unique randomly distributed data
// it becomes O(nlogn) because of the way that computer stores numbers
