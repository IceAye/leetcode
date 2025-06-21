// ❓ DESCRIPTION:
// You are given a string word and an integer k.
//
// We consider word to be k-special if |freq(word[i]) - freq(word[j])| <= k for all indices i and j in the string.
//
// Here, freq(x) denotes the frequency of the character x in word, and |y| denotes the absolute value of y.
//
// Return the minimum number of characters you need to delete to make word k-special.
// 📅 (daily question 2025, June 21st)
//
// ✅ SOLUTION (66.67% runtime, 90.48% memory):
const minimumDeletions = function (word, k) {
    const map = new Map();
    for (const char of word) {
        map.set(char, map.get(char) + 1 || 1);
    }
    const values = [...map.values()];

    let result = +Infinity;

    for (let x = 0; x < values.length; x++) {
        let count = 0;
        for (let y = 0; y < values.length; y++) {
            if (y !== x) {
                if (values[y] < values[x]) count += values[y];
                if (values[y] > values[x] + k) count += values[y] - values[x] - k;
            }
        }
        result = Math.min(result, count);
    }

    return result;
};

// 📌 TESTCASE:
console.log(minimumDeletions("aabcaba", 0)) // 3
console.log(minimumDeletions("dabdcbdcdcd", 2)) // 2
console.log(minimumDeletions("aaabaaa", 2)) // 1