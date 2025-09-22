// ❓ DESCRIPTION:
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// ❗ Constraints:
// 3 <= nums.length <= 3000
// -10^5 <= nums[i] <= 10^5

// ✅ SOLUTION (82.93% runtime, 81.76% memory):
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
            else if (sum > 0) right--;
            else left++;
        }
    }
    return result;
};

// 📌 TESTCASE:
console.log(threeSum([-1,0,1,2,-1,-4])) // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])) // []
console.log(threeSum([0,0,0])) // [[0,0,0]]