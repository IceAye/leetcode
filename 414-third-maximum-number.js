// ❓ DESCRIPTION:
// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// ❗ CONSTRAINTS:
// 1 <= nums.length <= 10^4
// -2^31 <= nums[i] <= 2^31 - 1

// ✅ SOLUTION:
/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function(nums) {
    const sortedArr = [...new Set(nums)].sort((a, b) => b - a);
    return Number.isInteger(sortedArr[2]) ? sortedArr[2] : sortedArr[0];
};

// 📌 TESTCASE:
console.log(thirdMax([3,2,1])) // 1
console.log(thirdMax([1,2])) // 2
console.log(thirdMax([2,2,3,1])) // 1
console.log(thirdMax([3,3,4,3,4,3,0,3,3])) // 4