// ❓ DESCRIPTION:
// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

// ✅ SOLUTION:
const arrayPairSum = function(nums) {
    return nums.sort((a, b) => a - b).reduce((acc, curr, ind) => acc + (ind % 2 === 0 ? curr : 0), 0);
};

// 📌 TESTCASE:
console.log(arrayPairSum([1,4,3,2])) // 4
console.log(arrayPairSum([6,2,6,5,1,2])) // 9