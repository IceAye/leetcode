# ❓ DESCRIPTION:
# Given a string s consisting of words and spaces, return the length of the last word in the string.
# A word is a maximal substring consisting of non-space characters only.

# ✅ SOLUTION (100% runtime):
class Solution(object):
    def lengthOfLastWord(self, s):
        return len(s.strip().split(' ')[-1])
    
# 📌 TESTCASE:
s = Solution()
print(s.lengthOfLastWord('Hello World')) # 5
print(s.lengthOfLastWord('   fly me   to   the moon  ')) # 4
print(s.lengthOfLastWord('luffy is still joyboy')) # 6
        