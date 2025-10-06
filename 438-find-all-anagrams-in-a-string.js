/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
    const pattern = new Array(26).fill(0);

    const countFrequency = (str, targetArray) => {
        for (const char of str) {
            targetArray[char.charCodeAt(0) - 97] += 1
        }
    }

    countFrequency(p, pattern);

    const anagram = new Array(26).fill(0);
    const startString = s.slice(0, p.length);
    countFrequency(startString, anagram);

    const result = [];
    let left = 0;
    let right = p.length - 1;
    while (left <= s.length - p.length) {
        if (pattern.every((item, index) => item === anagram[index] )) result.push(left);
        anagram[s[left].charCodeAt(0) - 97] -= 1;
        if (s[right + 1]) anagram[s[right + 1].charCodeAt(0) - 97] += 1;
        left++;
        right++;
    }

    return result;
};

console.log(findAnagrams("cbaebabacd", "abc")) // [0,6]
console.log(findAnagrams("abab", "ab")) // [0,1,2]