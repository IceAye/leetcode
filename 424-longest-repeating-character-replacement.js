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

console.log(characterReplacement('ABAB' , 2)); // 4
console.log(characterReplacement('AABABBA' , 1)); // 4