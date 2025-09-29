# ❓ DESCRIPTION:
# Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
# 📅 (daily question 2025 September, 28th)

# ❗ CONSTRAINTS:
# 3 <= nums.length <= 10^4
# 1 <= nums[i] <= 10^6

# ✅ SOLUTION (55.15% runtime, 33.82% memory):
class Solution(object):
    def largestPerimeter(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        sorted_nums = sorted(nums, reverse=True)
        for i in range(len(sorted_nums) - 2):
            if sorted_nums[i] < sorted_nums[i + 1] + sorted_nums[i + 2]:
                return sorted_nums[i] + sorted_nums[i + 1] + sorted_nums[i + 2]
        return 0