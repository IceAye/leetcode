// ❓ DESCRIPTION:
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// ❗ CONSTRAINTS:
// 1 <= nums.length <= 200
// -10^9 <= nums[i] <= 10^9
// -10*9 <= target <= 10^9

// ✅ SOLUTION (66.19% runtime, 17.10% memory):
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        if (nums[i] === nums[i - 1]) continue
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue

            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                }
                if (sum > target) {
                    right--;
                } else left++;
            }
        }
    }
    return result;
};

// 📌 TESTCASE:
console.log(fourSum([1,0,-1,0,-2,2], 0)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2,2,2,2,2], 8)); // [[2,2,2,2]]