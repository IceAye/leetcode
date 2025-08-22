# ❓ DESCRIPTION:
# Given a positive integer n, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

# ✅ SOLUTION (100% runtime):
class Solution(object):
    def hammingWeight(self, n):
        return list(bin(n)).count('1')
    
# 📌 TESTCASE:
s = Solution()
print(s.hammingWeight(11)) # 3
print(s.hammingWeight(128)) # 1
print(s.hammingWeight(2147483645)) # 30
        