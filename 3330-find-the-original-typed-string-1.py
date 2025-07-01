# ❓ DESCRIPTION:
# Alice is attempting to type a specific string on her computer. However, she tends to be clumsy and may press a key for too long, resulting in a character being typed multiple times.
# Although Alice tried to focus on her typing, she is aware that she may still have done this at most once.
# You are given a string word, which represents the final output displayed on Alice's screen.
# Return the total number of possible original strings that Alice might have intended to type.

# ✅ SOLUTION:
import re
from functools import reduce

class Solution:
    def possibleStringCount(self, word):
        array = [match.group() for match in re.finditer(r'(.)\1*', word)]
        return reduce(lambda acc, curr: acc + (len(curr) - 1), array, 0) + 1
    
