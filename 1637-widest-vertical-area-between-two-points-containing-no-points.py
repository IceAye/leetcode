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
