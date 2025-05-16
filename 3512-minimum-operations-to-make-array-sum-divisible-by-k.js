// ❓ DESCRIPTION:
// You are given an integer array nums and an integer k. You can perform the following operation any number of times:
//
// Select an index i and replace nums[i] with nums[i] - 1.
// Return the minimum number of operations required to make the sum of the array divisible by k.
//
// ✅ SOLUTION:
const minOperations = function(nums, k) {
    return nums.reduce((acc, curr) => acc + curr, 0) %  k;
};

// 📌 TESTCASE:
console.log(minOperations([3,9,7], 5)) // 4
console.log(minOperations([4,1,3], 4)) // 0
console.log(minOperations([3,2], 6)) // 5