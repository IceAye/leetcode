// ❓ DESCRIPTION:
// The power of the string is the maximum length of a non-empty substring that contains only one unique character.
// Given a string s, return the power of s.
//
// ✅ SOLUTION:
const maxPower = function (s) {
    let count = 1;

    let temp = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === s[i]) {
            temp++;
            count = Math.max(count, temp);
        } else {
            temp = 1;
        }
    }
    return count;
};

// 📌 TESTCASE:
console.log(maxPower("leetcode")); // 2
console.log(maxPower("abbcccddddeeeeedcba")); // 5