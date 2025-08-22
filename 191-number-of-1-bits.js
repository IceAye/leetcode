// ❓ DESCRIPTION:
// Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

// ✅ SOLUTION (100% runtime):
/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function(n) {
    return n.toString(2).match(/1/g).length;
};

// 📌 TESTCASE:
console.log(hammingWeight(11)) // 3
console.log(hammingWeight(128)) // 1
console.log(hammingWeight(2147483645)) // 30