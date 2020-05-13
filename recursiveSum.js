// Problem:
// Write a recursive function that, given a number  n, returns the sum of the digits of the
// number n

// Solution I came up with forgetting to think of modulo
function recursiveSumOfDigits(num) {
    let digits = String(num).split("");
    if (digits.length === 1) return Number(digits[0]);
    return (
        Number(digits[digits.length - 1]) +
        recursiveSumOfDigits(
            Number(digits.splice(0, digits.length - 1).join(""))
        )
    );
}

// Much better solution I found online, translated into JavaScript
function sumOfDigits(num) {
    if (num == 0) return 0;
    return (n % 10) + sumOfDigits(parseInt(n / 10));
}
