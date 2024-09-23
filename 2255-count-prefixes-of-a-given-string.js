// ❓ DESCRIPTION:
// You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.
// Return the number of strings in words that are a prefix of s.
// A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.
//
// ✅ SOLUTION:
let countPrefixes = function (words, s) {
    let count = 0;
    words.map(item => s.startsWith(item) ? count++ : count);
    return count;
};

// 📌 TESTCASE:
console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"));
console.log(countPrefixes(["a", "a"], "aa"));
