// ❓ DESCRIPTION:
// You are given a 0-indexed array nums and a non-negative integer k.
// In one operation, you can do the following:
// Choose an index i that hasn't been chosen before from the range [0, nums.length - 1].
// Replace nums[i] with any integer from the range [nums[i] - k, nums[i] + k].
// The beauty of the array is the length of the longest subsequence consisting of equal elements.
// Return the maximum possible beauty of the array nums after applying the operation any number of times.
// Note that you can apply the operation to each index only once.
// A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the order of the remaining elements.
//
// ✅ SOLUTION:
function maximumBeauty(nums, k) {
    let sorted = nums.sort((a, b) => a - b);
    let n = sorted.length;
    let right = 0;
    let left = 0;

    while (right < n) {
        if (sorted[right] - sorted[left] > k * 2) {
            left++;
        }
        right++;
    }
    return right - left;
}

// 📌 TESTCASE:
console.log(maximumBeauty([89,54,44,54], 5)) // 3
console.log(maximumBeauty([4,6,1,2], 2)) // 3
console.log(maximumBeauty([1,1,1,1], 10)) // 4
