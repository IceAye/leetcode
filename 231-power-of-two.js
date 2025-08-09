// ❓ DESCRIPTION:
// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.
// (daily question 2025 August, 9th)

// ✅ SOLUTION 1:
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    let i = 0;
    while (2 ** i <= n) {
        if (2 ** i === n) return true;
        i++;
    }
    return false;
};

// ✅ SOLUTION 2:
const isPowerOfTwo = function(n) {
    return n > 0 && n.toString(2).match(/1/g).length === 1;
};

// 📌 TESTCASE:
console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(16)) // true
console.log(isPowerOfTwo(3)) // false