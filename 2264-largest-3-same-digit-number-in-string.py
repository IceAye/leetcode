# ❓ DESCRIPTION:
# You are given a string num representing a large integer. An integer is good if it meets the following conditions:
# It is a substring of num with length 3.
# It consists of only one unique digit.
# Return the maximum good integer as a string or an empty string "" if no such integer exists.

# Note:
# A substring is a contiguous sequence of characters within a string.
# There may be leading zeroes in num or a good integer.
# 📅 (daily question 2025 August, 14th)

# ✅ SOLUTION:
class Solution(object):
    def largestGoodInteger(self, num):
        max = ''
        for i in range(len(num) - 2):
            if num[i] == num[i + 1] and num[i] == num[i + 2]:
                str = num[i] * 3
                if str > max:
                    max = str
        return max

# 📌 TESTCASE: 
s = Solution()
print(s.largestGoodInteger("6777133339"))
print(s.largestGoodInteger("2300019"))
print(s.largestGoodInteger("42352338"))