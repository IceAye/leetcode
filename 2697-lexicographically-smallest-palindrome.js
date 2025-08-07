// ❓ DESCRIPTION:
// You are given a string s consisting of lowercase English letters, and you are allowed to perform operations on it. In one operation, you can replace a character in s with another lowercase English letter.
// Your task is to make s a palindrome with the minimum number of operations possible. If there are multiple palindromes that can be made using the minimum number of operations, make the lexicographically smallest one.
// A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b.
// Return the resulting palindrome string.

// ✅ SOLUTION:
/**
 * @param {string} s
 * @return {string}
 */
const makeSmallestPalindrome = function(s) {
    const middle = Math.floor(s.length / 2);
    const array = [...s];

    if (s.length % 2 === 1) {
        for (let i = 0; i < middle; i++) {
            let prevChar = array[middle - 1 - i];
            let nextChar = array[middle + 1 + i];
            if ( prevChar === nextChar ) continue;
            if (prevChar > nextChar) array[middle - 1 - i] = nextChar;
            if (nextChar > prevChar) array[middle + 1 + i] = prevChar
        }
    }  else {
        for (let i = 0; i < middle; i++) {
            let prevChar = array[middle - 1 - i];
            let nextChar = array[middle + i];
            if ( prevChar === nextChar ) continue;
            if (prevChar > nextChar) array[middle - 1 - i] = nextChar;
            if (nextChar > prevChar) array[middle + i] = prevChar
        }
    }
    return array.join('');
};

// 📌 TESTCASE:
console.log(makeSmallestPalindrome("egcfe")) // "efcfe"
console.log(makeSmallestPalindrome("abcd")) // "abba"
console.log(makeSmallestPalindrome("seven")) // "neven"