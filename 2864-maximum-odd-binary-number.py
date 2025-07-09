# ❓ DESCRIPTION:
# You are given a binary string s that contains at least one '1'.
# You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.
# Return a string representing the maximum odd binary number that can be created from the given combination.
# Note that the resulting string can have leading zeros.

# ✅ SOLUTION (100% runtime):
class Solution(object):
    def maximumOddBinaryNumber(self, s):
        ones_length = s.count('1')
        return '1' * (ones_length - 1) + '0' * (len(s) - ones_length) + '1'

# 📌 TESTCASE:
s = Solution()
print(s.maximumOddBinaryNumber('010')) # "001"
print(s.maximumOddBinaryNumber('0101')) # "1001"