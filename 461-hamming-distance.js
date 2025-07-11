// ❓ DESCRIPTION:
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, return the Hamming distance between them.

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// ✅ SOLUTION (100% runtime):
const hammingDistance = function(x, y) {
    const num1 = x.toString(2).padStart(32, '0');
    const num2 = y.toString(2).padStart(32, '0');

    let sum = 0;

    for (let i = 0; i < num1.length; i++) {
        if (num1[i] !== num2[i]) sum++;
    }
    return sum;
};

// 📌 TESTCASE:
console.log(hammingDistance(1, 4)) // 2
console.log(hammingDistance(3, 1)) // 1