// ❓ DESCRIPTION:
// Given a string s, return true if s is a good string, or false otherwise.
//
// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).
//
// ✅ SOLUTION:
let areOccurrencesEqual = function (s) {
    let map = new Map();
    for (const char of s) {
        map.set(char, map.get(char) + 1 || 1)
    }

    return new Set(map.values()).size === 1
};

console.log(areOccurrencesEqual("abacbc"));
console.log(areOccurrencesEqual("aaabb"));
console.log(areOccurrencesEqual("aaaaa"));
console.log(areOccurrencesEqual(""));