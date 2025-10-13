// ❓ DESCRIPTION:
// You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.
// In one operation, select any index i such that 0 < i < words.length and words[i - 1] and words[i] are anagrams, and
// delete words[i] from words. Keep performing this operation as long as you can select an index that satisfies the conditions.
// Return words after performing all operations. It can be shown that selecting the indices for each operation in any
// arbitrary order will lead to the same result.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original
// letters exactly once. For example, "dacb" is an anagram of "abdc".

// ❗ CONSTRAINTS:
// 1 <= words.length <= 100
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.

// ✅ SOLUTION:
/**
 * @param {string[]} words
 * @return {string[]}
 */
const removeAnagrams = function (words) {
    let i = 0;
    let array = [...words];

    while (i < array.length - 1) {
        const freq1 = new Array(26).fill(0);
        for (const char of array[i]) {
            freq1[char.charCodeAt(0) - 97] += 1;
        }

        while (i + 1 < array.length) {
            const freq2 = new Array(26).fill(0);
            for (const char of array[i + 1]) {
                freq2[char.charCodeAt(0) - 97] += 1;
            }
            if (freq1.join('') === freq2.join('')) {
                array.splice(i + 1, 1);
            } else break
        }

        i++;
    }
    return array
};

// 📌 TESTCASE:
console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]))
console.log(removeAnagrams(["a","b","c","d","e"]))
console.log(removeAnagrams(["a","b","a"]))