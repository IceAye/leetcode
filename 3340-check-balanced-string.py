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
    
s = Solution()
print(s.isBalanced('1234'))
print(s.isBalanced('24123'))
        