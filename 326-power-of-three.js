// ❓ DESCRIPTION:
// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.
// (daily question 2025 August, 13th)

// ✅ SOLUTION:
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
    return (Math.log(n) /  Math.log(3)).toFixed(10).endsWith('.0000000000')
};

// 📌 TESTCASE:
console.log(isPowerOfThree(27)) // true
console.log(isPowerOfThree(9)) // true
console.log(isPowerOfThree(81)) // true
console.log(isPowerOfThree(387420488)) // false
console.log(isPowerOfThree(0)) // false
console.log(isPowerOfThree(-1)) // false
console.log(isPowerOfThree(533411731)) // false