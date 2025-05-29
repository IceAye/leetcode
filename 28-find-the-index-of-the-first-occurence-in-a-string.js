// ❓ DESCRIPTION:
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
// ✅ SOLUTION (100% runtime, 54.26% memory):
const strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

// 📌 TESTCASE:
console.log(strStr("sadbutsad", "sad")) // 0
console.log(strStr("leetcode", "leeto")) // -1
