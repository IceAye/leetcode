// ❓ DESCRIPTION:
// You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements.
// Return the maximum score you can get by erasing exactly one subarray.
// An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is equal to a[l],a[l+1],...,a[r] for some (l,r).
// 📅 (daily question 2025 July, 22nd)

// ✅ SOLUTION (77.42% runtime, 66.93% memory):
/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumUniqueSubarray = function(nums) {
    let seen = new Set();
    let left = 0;
    let sum = 0;
    let maxSum = 0;

    for (let right = 0; right < nums.length; right++) {
        while (seen.has(nums[right])) {
            seen.delete(nums[left]);
            sum -= nums[left];
            left++;
        }
        seen.add(nums[right]);
        sum += nums[right];
        maxSum = Math.max(maxSum , sum);
    }
    return maxSum;
};

// 📌 TESTCASE:
console.log(maximumUniqueSubarray([4 , 2 , 4 , 5 , 6])); // 17
console.log(maximumUniqueSubarray([5 , 2 , 1 , 2 , 5 , 2 , 1 , 2 , 5])); // 8