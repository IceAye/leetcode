// ❓ DESCRIPTION:
// A word is considered valid if:
//
// It contains a minimum of 3 characters.
// It contains only digits (0-9), and English letters (uppercase and lowercase).
// It includes at least one vowel.
// It includes at least one consonant.
// You are given a string word.
//
// Return true if word is valid, otherwise, return false.
//
// Notes:
// 'a', 'e', 'i', 'o', 'u', and their uppercases are vowels.
// A consonant is an English letter that is not a vowel.
// (daily question 2025 July, 15):

// ✅ SOLUTION:

/**
 * @param {string} word
 * @return {boolean}
 */
const isValid = function(word) {
    return /^(?=.*[aeiou])(?=.*[bcdfghjklmnpqrstvwyxz])[a-z0-9]{3,}$/i.test(word);
};

// 📌 TESTCASE:
console.log(isValid("234Adas")) // true
console.log(isValid("b3")) // false
console.log(isValid("a3$e")) // false
console.log(isValid("aya")) // true

