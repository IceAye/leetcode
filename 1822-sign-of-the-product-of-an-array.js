// ❓ DESCRIPTION:
// Implement a function signFunc(x) that returns:
//
// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.
//
// Return signFunc(product).

// ✅ SOLUTION:
const arraySign = function (nums) {
    let product = nums.reduce((acc, curr) => acc * curr);
    return product > 0 ? 1 : product < 0 ? -1 : 0;
};

// 📌 TESTCASE:
console.log(arraySign([-1, -2, -3, -4, 3, 2, 1])); // 1
console.log(arraySign([1, 5, 0, 2, -3])); // 0
console.log(arraySign([-1, 1, -1, 1, -1])); // -1