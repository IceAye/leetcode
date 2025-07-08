# ❓ DESCRIPTION:
# You are given an integer array nums.
# Return the smallest index i such that the sum of the digits of nums[i] is equal to i.
# If no such index exists, return -1.

# ✅ SOLUTION:
import math

class Solution(object):
    def smallestIndex(self, nums):
        for i in range(len(nums)):
            number = nums[i]
            sumOfDigits = 0

            while number > 0:
                sumOfDigits += number % 10
                number = math.floor(number / 10)
            
            if i == sumOfDigits:
                return i
        
        return -1
    
# 📌 TESTCASE: 
s = Solution()
print(s.smallestIndex([1,3,2])) # 2
print(s.smallestIndex([1,10,11])) # 1
print(s.smallestIndex([1,2,3])) # -1