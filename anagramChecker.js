// Anagram is a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

// frequency counter solution

var isAnagram = function (str1, str2) {
    // trim and check for length
    str1 = str1.toLowerCase().trim();
    str2 = str2.toLowerCase().trim();
    if (str1.length !== str2.length) return false;
    // make counting objects
    str1LetterObject = {};
    str2LetterObject = {};
    // add to objects
    for (let char of str1) {
        if (str1LetterObject.hasOwnProperty(char)) {
            str1LetterObject[char]++;
        } else {
            str1LetterObject[char] = 0;
        }
    }

    for (let char of str2) {
        if (str2LetterObject.hasOwnProperty(char)) {
            str2LetterObject[char]++;
        } else {
            str2LetterObject[char] = 0;
        }
    }

    // check for equality of key value pairs
    for (let key in str1LetterObject) {
        if (str2LetterObject[key] !== str1LetterObject[key]) return false;
    }
    // if everything is fine, return true
    return true;
};
