// ❓ DESCRIPTION:
// You are given a string s consisting of lowercase English letters.
//
// Your task is to find the maximum difference diff = a1 - a2 between the frequency of characters a1 and a2 in the string such that:
//
// a1 has an odd frequency in the string.
// a2 has an even frequency in the string.
// Return this maximum difference.
// 📅 (daily question 2025, June 10th)
//
// ✅ SOLUTION:
const maxDifference = function(s) {
    const freqMap = new Map();
    for (const char of s) {
        freqMap.set(char, freqMap.get(char) + 1 || 1);
    }

    const maxOdd = Math.max(...[...freqMap.values()].filter(num => num % 2 === 1), 0);
    const maxEven = Math.min(...[...freqMap.values()].filter(num => num % 2 === 0), +Infinity);

    return maxOdd - maxEven;
};

// 📌 TESTCASE:
console.log(maxDifference("aaaaabbc")) // 3
console.log(maxDifference("abcabcab")) // 1
console.log(maxDifference("mmsmsym")) // -1