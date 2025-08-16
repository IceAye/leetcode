# ❓ DESCRIPTION:
# You are given a positive integer num consisting only of digits 6 and 9.
# Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
# 📅 (daily question 2025 August, 16th)

# ✅ SOLUTION:
class Solution(object):
    def maximum69Number (self, num):
        return int(str(num).replace('6', '9', 1))

# 📌 TESTCASE:  
s = Solution()
print(s.maximum69Number(9669))
print(s.maximum69Number(9996))
print(s.maximum69Number(9999))