// ❓ DESCRIPTION:
// Given an integer n, return true if it is a power of four. Otherwise, return false.
// An integer n is a power of four, if there exists an integer x such that n == 4x.
// 📅 (daily question 2025 August, 15th)

// ✅ SOLUTION:
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function(n) {
    return Number.isInteger(Math.log(n) / Math.log(4));
};

// 📌 TESTCASE:
console.log(isPowerOfFour(16)) // true
console.log(isPowerOfFour(5)) // false
console.log(isPowerOfFour(1)) // true