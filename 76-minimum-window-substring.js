// ❓ DESCRIPTION:
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.

// ❗ CONSTRAINTS:
// m == s.length
// n == t.length
// 1 <= m, n <= 10^5
// s and t consist of uppercase and lowercase English letters.

// ✅ SOLUTION:
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function(s , t) {
    if (t.length > s.length) return '';

    const targetFreq = new Map();
    const stringFreq = new Map();

    for (const char of t) {
        targetFreq.set(char , (targetFreq.get(char) || 0) + 1);
    }

    const targetUniques = targetFreq.size;
    let stringUniquesCounter = 0;

    let min = Infinity;
    let minWord = '';

    let left = 0;
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        if (targetFreq.has(currentChar)) {
            stringFreq.set(currentChar , (stringFreq.get(currentChar) || 0) + 1);

            if (stringFreq.get(currentChar) === targetFreq.get(currentChar)) stringUniquesCounter++;
        }

        while (targetUniques === stringUniquesCounter) {
            if ((right - left + 1) < min) {
                min = right - left + 1;
                minWord = s.slice(left , right + 1);
            }

            const leftChar = s[left];
            if (stringFreq.has(leftChar)) {
                if (stringFreq.get(leftChar) === targetFreq.get(leftChar)) stringUniquesCounter--;
                stringFreq.set(leftChar , stringFreq.get(leftChar) - 1);
            }
            left++;
        }
    }

    return minWord;
};

// 📌 TESTCASE:
console.log(minWindow('ADOBECODEBANC' , 'ABC')); // "BANC"
console.log(minWindow('a' , 'a')); // "a"
console.log(minWindow('a' , 'aa')); // ""