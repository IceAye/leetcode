# ❓ DESCRIPTION:
# You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
# Return the length of the longest substring containing the same letter you can get after performing the above operations.

# ❗ CONSTRAINTS:
# 1 <= s.length <= 10^5
# s consists of only uppercase English letters.
# 0 <= k <= s.length

# ✅ SOLUTION (76.82 runtime, 17.37% memory):

class Solution(object):
    def characterReplacement(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: int
        """
        max_length = 0
        max_freq = 0
        frequency = [0] * 26

        left = 0

        for right in range(len(s)):
            current_charCode = ord(s[right]) - 65
            frequency[current_charCode] += 1
            max_freq = max(max_freq, frequency[current_charCode])

            while (right - left + 1) - max_freq> k:
                frequency[ord(s[left]) - 65] -= 1
                left += 1

            max_length = max(max_length, right - left + 1)

        return max_length