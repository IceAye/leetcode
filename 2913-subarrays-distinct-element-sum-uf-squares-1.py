# ❓ DESCRIPTION:
# You are given a 0-indexed integer array nums.
# The distinct count of a subarray of nums is defined as:
# Let nums[i..j] be a subarray of nums consisting of all the indices from i to j such that 0 <= i <= j < nums.length. Then the number of distinct values in nums[i..j] is called the distinct count of nums[i..j].
# Return the sum of the squares of distinct counts of all subarrays of nums.
# A subarray is a contiguous non-empty sequence of elements within an array.

# ✅ SOLUTION:
class Solution(object):
    def sumCounts(self, nums):
       sum = 0
       length_of_nums = len(nums)

       for i in range(length_of_nums):
            set_of_digits = set()

            for j in range(i, length_of_nums):
                set_of_digits.add(nums[j])
                sum += len(set_of_digits)**2

       return sum

# 📌 TESTCASE:
s = Solution()
print(s.sumCounts([1,2,1])) # 15
print(s.sumCounts([1,1])) # 3