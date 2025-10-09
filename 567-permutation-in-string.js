// ❓ DESCRIPTION:
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

// ❗ CONSTRAINTS:
// 1 <= s1.length, s2.length <= 10^4
// s1 and s2 consist of lowercase English letters.


// ✅ SOLUTION (90.67% runtime, 84.90% memory):
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function(s1, s2) {
    const targetStringFrequencyCount = new Array(26).fill(0);
    for (const char of s1) {
        targetStringFrequencyCount[char.charCodeAt(0) - 97] += 1;
    }

    let left = 0;
    let right = 0;
    let currentString = new Array(26).fill(0);

    while (right < s2.length) {
        currentString[s2[right].charCodeAt(0) - 97] += 1;
        right++;

        if (targetStringFrequencyCount.every((item, index) => currentString[index] === item)) {
            return true;
        }
        if (right - left === s1.length) {
            currentString[s2[left].charCodeAt(0) - 97] -= 1;
            left++;
        }
    }

    return false;
};

// 📌 TESTCASE:
console.log(checkInclusion("ab", "eidbaooo")) // true
console.log(checkInclusion("ab", "eidboaoo")) // false