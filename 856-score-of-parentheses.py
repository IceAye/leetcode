# ❓ DESCRIPTION:
# Given a balanced parentheses string s, return the score of the string.
# The score of a balanced parentheses string is based on the following rule:
# "()" has score 1.
# AB has score A + B, where A and B are balanced parentheses strings.
# (A) has score 2 * A, where A is a balanced parentheses string.

# ✅ SOLUTION (100% runtime, 80% memory):
class Solution(object):
    def scoreOfParentheses(self, s):
        """
        :type s: str
        :rtype: int
        """
        stack = []

        for char in s:
            if char == '(':
                stack.append(0)
            else:
                innerResult = 0

                while stack[-1] != 0:
                    innerResult += stack.pop()

                stack.pop()

                if innerResult == 0:
                    stack.append(1)
                else:
                    stack.append(innerResult * 2)

        return sum(stack)