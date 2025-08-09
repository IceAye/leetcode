// ❓ DESCRIPTION:
// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

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

// 📌 TESTCASE:
console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(16)) // true
console.log(isPowerOfTwo(3)) // false