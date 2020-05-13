// Problem:
// Write a recursive function that checks whether a string is a palindrome (a palindrome is
//     a string that's the same when reads forwards and backwards.)

// Solution I came up with, works with spaces between words and varying cases
function palindromeCheck(str) {
    str = str.toLowerCase();
    str = str.split(" ").join("");
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    return (
        str[0] === str[str.length - 1] &&
        palindromeCheck(str.slice(1, str.length - 1))
    );
}
