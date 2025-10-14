// ❓ DESCRIPTION:
// Given an array nums of n integers and an integer k, determine whether there exist two adjacent subarrays of length k such that both subarrays are strictly increasing. Specifically, check if there are two subarrays starting at indices a and b (a < b), where:
// Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
// The subarrays must be adjacent, meaning b = a + k.
// Return true if it is possible to find two such subarrays, and false otherwise.

// ❗ CONSTRAINTS:
// 2 <= nums.length <= 100
// 1 < 2 * k <= nums.length
// -1000 <= nums[i] <= 1000

// ✅ SOLUTION (89.29% runtime, 76.79% memory):
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const hasIncreasingSubarrays = function(nums, k) {
    if (k === 1) return nums.length >= 2;

    let required = 0;
    for (let i = 1, j = i + k; j < nums.length; i++, j = i + k) {
        if (nums[i] > nums[i - 1] && nums[j] > nums[j - 1]) {
            required++;
            if (required === k - 1) return true;
        } else {
            required = 0;
        }
    }
    return false;
};

// 📌 TESTCASE:
console.log(hasIncreasingSubarrays([2,5,7,8,9,2,3,4,3,1], 3)) // true
console.log(hasIncreasingSubarrays([1,2,3,4,4,4,4,5,6,7], 5)) // false
console.log(hasIncreasingSubarrays([-15,19], 1)) // true
console.log(hasIncreasingSubarrays([5,8,-2,-1], 2)) // true
console.log(hasIncreasingSubarrays([8,9,13,-10,-9,-3], 3)) // true