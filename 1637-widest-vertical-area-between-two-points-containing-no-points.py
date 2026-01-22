# ❓ DESCRIPTION:
# Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.
# A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.
# Note that points on the edge of a vertical area are not considered included in the area.

# ❗ CONSTRAINTS:
# n == points.length
# 2 <= n <= 105
# points[i].length == 2
# 0 <= xi, yi <= 109

# ✅ SOLUTION:
class Solution(object):
    def maxWidthOfVerticalArea(self, points):
        """
        :type points: List[List[int]]
        :rtype: int
        """
        max = float("-inf")
        points.sort(key = lambda x: x[0])

        for i in range(len(points) - 1):
            current = points[i + 1][0] - points[i][0]    
            if current > max:
                max = current

        return max
