# ❓ DESCRIPTION:
# Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

# ✅ SOLUTION (93.33% runtime< 48.336% memory):
class Solution(object):
    def arrayPairSum(self, nums):
        nums.sort()          
        return sum(nums[::2])

# 📌 TESTCASE:  
obj = Solution()
print(obj.arrayPairSum([1,4,3,2])) # 4
print(obj.arrayPairSum([6,2,6,5,1,2])) # 9