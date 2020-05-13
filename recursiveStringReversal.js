// Problem:
// Write a recursive function that, given a string s, prints the characters of s in reverse order.

// Solution I came up with:
function reverseString(str) {
    if (str.length === 1) {
        return str;
    }

    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}
