# ❓ DEFINITION:
# You are given an integer array nums.
# You are allowed to delete any number of elements from nums without making it empty. After performing the deletions, select a subarray of nums such that:
# All elements in the subarray are unique.
# The sum of the elements in the subarray is maximized.
# Return the maximum sum of such a subarray.

# ✅ SOLUTION (100% runtime, 56.45% memory):
class Solution(object):
    def maxSum(self, nums):
        max_number = max(nums)
        if max_number <= 0:
            return max_number
        else:
            unique = set(nums)
            return sum(num for num in unique if num > 0)

# 📌 TESTCASE:     
s = Solution()
print(s.maxSum([1,2,3,4,5]))
print(s.maxSum([1,1,0,1,1]))
print(s.maxSum([1,2,-1,-2,1,0,-1]))
        