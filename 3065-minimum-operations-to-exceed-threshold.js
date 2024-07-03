// ❓ DESCRIPTION:
// You are given a 0-indexed integer array nums, and an integer k.
// In one operation, you can remove one occurrence of the smallest element of nums.
// Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.
//
// 📌 EXAMPLES:
// Input: [2,11,10,1,3], k = 10 Output: 3
// Input: [1,1,2,4,9], k = 1 Output: 0
// Input: [1,1,2,4,9], k = 9 Output: 4
//
// ✅ SOLUTION:

let minOperations = function(nums, k) {
    return nums.filter(item => item < k).length
}

console.log('Output: ' , minOperations([2,11,10,1,3], 10))
console.log('Output: ' , minOperations([1,1,2,4,9], 1))
console.log('Output: ' , minOperations([1,1,2,4,9], 9))