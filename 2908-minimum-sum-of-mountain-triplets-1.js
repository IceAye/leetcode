// ❓ DESCRIPTION:
// You are given a 0-indexed array nums of integers.
//
// A triplet of indices (i, j, k) is a mountain if:
//
// i < j < k
// nums[i] < nums[j] and nums[k] < nums[j]
// Return the minimum possible sum of a mountain triplet of nums. If no such triplet exists, return -1.
//
// ✅ SOLUTION:
const minimumSum = function (nums) {
    let min = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = i + 2; k < nums.length; k++) {
                if (i < j && j < k && nums[i] < nums[j] && nums[j] > nums[k]) {
                    let sum = nums[i] + nums[j] + nums[k];
                    min = Math.min(min , sum)
                }
            }
        }
    }
    return min !== Infinity ? min : -1;
};

// 📌 TESTCASE:
console.log(minimumSum([8 , 6 , 1 , 5 , 3])) // 9
console.log(minimumSum([5 , 4 , 8 , 7 , 10 , 2])) // 13
console.log(minimumSum([6 , 5 , 4 , 3 , 4 , 5])) // -1