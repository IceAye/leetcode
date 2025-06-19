// ❓ DESCRIPTION:
// You are given an integer array nums and an integer k. You may partition nums into one or more subsequences such that each element in nums appears in exactly one of the subsequences.
// Return the minimum number of subsequences needed such that the difference between the maximum and minimum values in each subsequence is at most k.
// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
// (daily question 2025, June 19th):
//
// ✅ SOLUTION in JavaScript (48.00% runtime, 80.00% memory):
const partitionArray = function (nums, k) {
    let count = 0;
    nums.sort((a, b) => a - b);
    let i = 0
    while ( i < nums.length) {
        let j = i;
        while (nums[j] - nums[i] <= k) j++;
        count++;
        i = j;
    }
    return count;
};

// ✅ SOLUTION in Python3
class Solution:
    def partitionArray(self, nums: List[int], k: int) -> int:
        count = 0
        nums.sort()
        
        i = 0
        while i < len(nums):
            j = i
            while j < len(nums) and nums[j] - nums[i] <= k:
                j += 1
            count += 1
            i = j
            
        return count

// 📌 TESTCASE:
console.log(partitionArray([3,6,1,2,5], 2)) // 2
console.log(partitionArray([1,2,3], 1)) // 2
console.log(partitionArray([2,2,4,5], 0)) // 3
