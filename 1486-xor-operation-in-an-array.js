// ❓ DESCRIPTION:
// You are given an integer n and an integer start.
// Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.
// Return the bitwise XOR of all elements of nums.

// ✅ SOLUTION (100% runtime, 67.83% memory):
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function(n, start) {
    let xor = 0;

    for (let i = 0; i < n; i++) {
        xor ^= start + 2 * i;
    }

    return xor;
};

// 📌 TESTCASE:
console.log(xorOperation(5, 0)) // 8
console.log(xorOperation(4, 3)) // 8