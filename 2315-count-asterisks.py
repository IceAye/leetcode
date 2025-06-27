# ❓ DESCRIPTI0N:
# You are given a string s, where every two consecutive vertical bars '|' are grouped into a pair. In other words, the 1st and 2nd '|' make a pair, the 3rd and 4th '|' make a pair, and so forth.

# Return the number of '*' in s, excluding the '*' between each pair of '|'.

# Note that each '|' will belong to exactly one pair.

# ✅ SOLUTION (100% runtime):

class Solution(object):
    def countAsterisks(self, s):
        count = 0
        s = s.split('|')

        for i in range(len(s)) :
            if i % 2 == 0:
                for char in s[i]:
                    if char == '*':
                        count +=1

        return count

# 📌 TESTCASE: 
s = Solution()
print(s.countAsterisks("l|*e*et|c**o|*de|"))
print(s.countAsterisks("iamprogrammer"))
print(s.countAsterisks("yo|uar|e**|b|e***au|tifu|l"))
