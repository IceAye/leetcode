// ❓ DESCRIPTION:
// Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:
// Find the leftmost occurrence of the substring part and remove it from s.
// Return s after removing all occurrences of part.
// A substring is a contiguous sequence of characters in a string.
//
// ✅ SOLUTION:
const removeOccurrences = function (s, part) {
    while (new RegExp(`${part}`).test(s)) {
        s = s.replace(new RegExp(`${part}`), "");
    }
    return s;
};

// 📌 TESTCASE:
console.log(removeOccurrences("daabcbaabcbc", "abc")) // "dab"
console.log(removeOccurrences("axxxxyyyyb", "xy")) // "ab"