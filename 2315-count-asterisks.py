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
    
s = Solution()
print(s.countAsterisks("l|*e*et|c**o|*de|"))
print(s.countAsterisks("iamprogrammer"))
print(s.countAsterisks("yo|uar|e**|b|e***au|tifu|l"))
