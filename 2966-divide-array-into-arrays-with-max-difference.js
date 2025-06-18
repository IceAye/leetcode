// ❓ DESCRIPTION:
// You are given an integer array nums of size n where n is a multiple of 3 and a positive integer k.
// Divide the array nums into n / 3 arrays of size 3 satisfying the following condition:
// The difference between any two elements in one array is less than or equal to k.
// Return a 2D array containing the arrays. If it is impossible to satisfy the conditions, return an empty array. And if there are multiple answers, return any of them.
// (daily question 2025, June 18th)
//
// ✅ SOLUTION (96.30 runtime, 11.11% memory):
const divideArray = function(nums, k) {
    const result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i += 3) {
        if (nums[i + 2] - nums[i] <= k) {
            result.push(nums.slice(i, i + 3));
        } else return [];
    }
    return result;
};

// 📌 TESTCASE:
console.log(divideArray([1,3,4,8,7,9,3,5,1],  2)) // [[1,1,3],[3,4,5],[7,8,9]]
console.log(divideArray([2,4,2,2,5,2],  2)) // []
console.log(divideArray([4,2,9,8,2,12,7,12,10,5,8,5,5,7,9,2,5,11],  14)) // [[2,2,12],[4,8,5],[5,9,7],[7,8,5],[5,9,10],[11,12,2]]