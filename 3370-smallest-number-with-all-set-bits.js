// ❓ DESCRIPTION:
// You are given a positive number n.
// Return the smallest number x greater than or equal to n, such that the binary representation of x contains only set bits

// ❗ CONSTRAINTS:
// 1 <= n <= 1000

// ✅ SOLUTION:
/**
 * @param {number} n
 * @return {number}
 */
const smallestNumber = function(n) {
    let i = n;
    while (/0/.test(i.toString(2))) {
        i++;
    }
    return i;
};

// 📌 TESTCASE:
console.log(smallestNumber(5)) // 7
console.log(smallestNumber(10)) // 15
console.log(smallestNumber(3)) // 3