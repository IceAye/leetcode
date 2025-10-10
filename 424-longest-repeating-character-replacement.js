// ❓ DESCRIPTION:
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// ❗ CONSTRAINTS:
// 1 <= s.length <= 10^5
// s consists of only uppercase English letters.
// 0 <= k <= s.length

// ✅ SOLUTION (91.03 runtime, 34.30% memory):
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function(s , k) {
    let maxLength = 0;
    let maxFreq = 0;
    let frequency = new Array(26).fill(0);

    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const currentCharCode = s[right].charCodeAt(0) - 65;
        frequency[currentCharCode] += 1;
        maxFreq = Math.max(maxFreq , frequency[currentCharCode]);

        while ((right - left + 1) - maxFreq > k) {
            frequency[s[left].charCodeAt(0) - 65] -= 1;
            left++;
        }
        maxLength = Math.max(maxLength , right - left + 1);
    }
    return maxLength;
};

// 📌 TESTCASE:
console.log(characterReplacement('ABAB' , 2)); // 4
console.log(characterReplacement('AABABBA' , 1)); // 4