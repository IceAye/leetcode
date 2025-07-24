# ❓ DESCRIPTION:
# You are given an integer n and an integer start.
# Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.
# Return the bitwise XOR of all elements of nums.

# ✅ SOLUTION (100% runtime):
class Solution(object):
    def xorOperation(self, n, start):
        xor = 0
        for i in range(n):
            xor ^= start + 2 * i
        return xor

# 📌 TESTCASE: 
s = Solution()
print(s.xorOperation(5, 0)) # 8
print(s.xorOperation(4, 3)) # 8