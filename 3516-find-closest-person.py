# ❓ DESCRIPTION:
# You are given three integers x, y, and z, representing the positions of three people on a number line:
# x is the position of Person 1.
# y is the position of Person 2.
# z is the position of Person 3, who does not move.
# Both Person 1 and Person 2 move toward Person 3 at the same speed.

# Determine which person reaches Person 3 first:

# Return 1 if Person 1 arrives first.
# Return 2 if Person 2 arrives first.
# Return 0 if both arrive at the same time.
# Return the result accordingly.

# ✅ SOLUTION (100% runtime):
class Solution:
    def findClosest(self, x: int, y: int, z: int) -> int:
        person1 = abs(z - x)
        person2 = abs(z - y)
        if (person1 < person2):
            return 1
        elif (person2 < person1):
            return 2
        else:
            return 0