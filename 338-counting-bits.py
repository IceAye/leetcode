# ❓ DESCRIPTION:
# Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

# ✅ SOLUTION:
class Solution(object):
    def countBits(self, n):
        ans = []
        for i in range(n + 1):
            binary_string = bin(i)[2:]
            ans.append(binary_string.count('1'))
        return ans

# 📌 TESTCASE:
s = Solution()
print(s.countBits(2)) # [0, 1, 1]
print(s.countBits(5)) # [0, 1, 1, 2, 1, 2]
        