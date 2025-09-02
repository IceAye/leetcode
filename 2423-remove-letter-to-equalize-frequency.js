// ❓ DESCRIPTION:
// You are given a 0-indexed string word, consisting of lowercase English letters. You need to select one index and remove the letter at that index from word so that the frequency of every letter present in word is equal.
// Return true if it is possible to remove one letter so that the frequency of all letters in word are equal, and false otherwise.
//
// Note:
// The frequency of a letter x is the number of times it occurs in the string.
// You must remove exactly one letter and cannot choose to do nothing.

// ✅ SOLUTION:
/**
 * @param {string} word
 * @return {boolean}
 */
const equalFrequency = function(word) {
    for (let i = 0; i < word.length; i++) {
        const newWord = word.slice(0, i) + word.slice(i + 1);

        const freqMap = new Map();
        for (const char of newWord) {
            freqMap.set(char, freqMap.get(char) + 1 || 1);
        }

        const values = new Set(freqMap.values());
        if (values.size === 1) return true;
    }

    return false;
};

// 📌 TESTCASE:
console.log(equalFrequency("abcc")) // true
console.log(equalFrequency("aazz")) // false
console.log(equalFrequency("bac")) // true