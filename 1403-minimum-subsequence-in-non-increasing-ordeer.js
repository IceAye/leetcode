// ❓ DESCRIPTION:
// Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence.
//
// If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array.
//
// Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.
//
// ✅ SOLUTION (runtime 99.20%):
let minSubsequence = function (nums) {
    nums.sort((a, b) => b - a)
    let right = nums.reduce((a, b) => a + b);
    let left = 0;

    let i = 0;
    while (left <= right) {
        left += nums[i]
        right -= nums[i]
        i++
    }
    return nums.slice(0, i)
};

console.log(minSubsequence([4, 3, 10, 9, 8]));
console.log(minSubsequence([4,4,7,6,7]));
console.log(minSubsequence([6]));
console.log(minSubsequence([8,8]));
console.log(minSubsequence([8,8,7]));
console.log(minSubsequence([3,5]));
