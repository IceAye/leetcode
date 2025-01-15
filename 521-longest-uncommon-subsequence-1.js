// ❓ DESCRIPTION:
// Given two strings a and b, return the length of the longest uncommon subsequence between a and b. If no such uncommon subsequence exists, return -1.
// An uncommon subsequence between two strings is a string that is a
// subsequence of exactly one of them.
//
// ✅ SOLUTION (100% runtime):
const findLUSlength = function(a, b) {
    return a === b ? - 1 : Math.max(a.length, b.length);
};

// 📌 TESTCASE:
console.log(findLUSlength("aba","cdc")) // 3
console.log(findLUSlength("aaa","bbb")) // 3
console.log(findLUSlength("aaa","aaa")) // -1