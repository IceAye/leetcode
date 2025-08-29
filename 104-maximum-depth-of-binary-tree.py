# ❓ DESCRIPTION:
# Given the root of a binary tree, return its maximum depth.
# A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# ✅ SOLUTION:
class Solution(object):
    def maxDepth(self, root):
        if not root:
            return 0

        max_depth = 0
        stack = [{'node': root, 'depth': 1}]

        while stack:
            current = stack.pop()
            node = current['node']
            depth = current['depth']

            if node:
                max_depth = max(max_depth, depth)
                stack.append({'node': node.left, 'depth': depth + 1})
                stack.append({'node': node.right, 'depth': depth + 1})

        return max_depth