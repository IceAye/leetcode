// ❓ DESCRIPTION:
// Given a string s, calculate its reverse degree.
//
// The reverse degree is calculated as follows:
//
// For each character, multiply its position in the reversed alphabet ('a' = 26, 'b' = 25, ..., 'z' = 1) with its position in the string (1-indexed).
// Sum these products for all characters in the string.
// Return the reverse degree of s.
//
// ✅ SOLUTION:
const reverseDegree = function(s) {
    return [...s].reduce((acc, curr, ind) => {
        acc += (curr.charCodeAt(0) - (71 + 2 * (curr.charCodeAt(0) - 97))) * (ind + 1);
        return acc;
    }, 0)
};

// 📌 TESTCASE:
console.log(reverseDegree("abc")) // 148
console.log(reverseDegree("zaza")) // 160