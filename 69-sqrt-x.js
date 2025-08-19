// ❓ DESCRIPTION:
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// ✅ SOLUTION:
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
    return Math.floor(Math.sqrt(x));
};

// 📌 TESTCASE:
console.log(mySqrt(4)) // 2
console.log(mySqrt(8)) // 2