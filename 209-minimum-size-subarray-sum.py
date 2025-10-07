# ❓ DESCRIPTION:
# Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

# ❗ CONSTRAINTS:
# 1 <= target <= 10^9
# 1 <= nums.length <= 10^5
# 1 <= nums[i] <= 10^4

# ✅ SOLUTION (71.90% runtime, 8.62% memory):
class Solution(object):
    def minSubArrayLen(self, target, nums):
        """
        :type target: int
        :type nums: List[int]
        :rtype: int
        """
        min_len = float("inf")

        sum_arr = 0
        left = 0
        
        for right in range(len(nums)):
            sum_arr += nums[right]
            while sum_arr >= target:
                min_len = min(min_len, right - left + 1)
                sum_arr -= nums[left]
                left += 1

        return 0 if min_len == float("inf") else min_len