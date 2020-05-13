// Write a recursive function that, given two strings, returns whether the first string is a
// subsequence of the second. For example, given hac and cathartic, you should return true,
// but given bat and table, you should return false.

function stringSubsequence(str1, str2) {
    m = str1.length;
    n = str2.length;

    if (m === 1) return str1[0] === str2[n];
    if (n === 1) return str1[m] === str2[0];
    if (str1[m - 1] === str2[m - 1]) {
        return stringSubsequence(str1.slice(0, m - 2), str2.slice(0, n - 2));
    }
    return stringSubsequence(str1, str2.slice(0, m - 2));
}
