# ❓ DESCRIPTION:
# Given an integer numRows, return the first numRows of Pascal's triangle.
# In Pascal's triangle, each number is the sum of the two numbers directly above it.
# 📅 (daily question 2025 August, 1st)

# ✅ SOLUTION (100% runtime, 88.57% memory):
class Solution(object):
    def generate(self, numRows):
        result = [[1]]

        for i in range(1, numRows):
            prev = result[-1]
            result.append([1] + [prev[j] + prev[j + 1] for j in range(len(prev) - 1)] + [1])
        
        return result
    
# 📌 TESTCASE:
s = Solution()
print(s.generate(5)) # [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
print(s.generate(1)) # [[1]]
        