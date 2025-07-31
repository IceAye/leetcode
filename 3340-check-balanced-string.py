# ❓ DESCRIPTION:
# You are given a string num consisting of only digits. A string of digits is called balanced if the sum of the digits at even indices is equal to the sum of digits at odd indices.
# Return true if num is balanced, otherwise return false.

# ✅ SOLUTION (92.75% runtime, 99.52% memory):
class Solution(object):
    def isBalanced(self, num):
        sum_evens = 0
        sum_odds = 0
        for i in range(len(num)):
            if i % 2 == 0:
                sum_evens += int(num[i])
            else:
                sum_odds += int(num[i])
        return sum_evens == sum_odds

# 📌 TESTCASE: 
s = Solution()
print(s.isBalanced('1234'))
print(s.isBalanced('24123'))
        