# ❓ DESCRIPTION:
# No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.
# Given an integer n, return a list of two integers [a, b] where:
# a and b are No-Zero integers.
# a + b = n
# The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.
# 📅 (daily question 2025 September, 8th)

# ✅ SOLUTION (100% runtime):
class Solution(object):
    def getNoZeroIntegers(self, n):

        def hasZero(number):
            if '0' in str(number):
                return True
            
        for a in range(1, n):
            if not hasZero(a):
                b = n - a
                if not hasZero(b):
                    return [a, b]
            
            
# 📌 TESTCASE:        
s = Solution()
print(s.getNoZeroIntegers(2))
print(s.getNoZeroIntegers(11))
        