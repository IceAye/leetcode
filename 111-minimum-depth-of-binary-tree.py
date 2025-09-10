# ❓ DESCRIPTION:
# Given a binary tree, find its minimum depth.
# The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
# Note: A leaf is a node with no children.

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# ✅ SOLUTION:
class Solution(object):
    def minDepth(self, root):
        if root is None:  return 0

        leftDepth = self.minDepth(root.left)
        rightDepth = self.minDepth(root.right)

        if root.left is None and root.right is None:
            return 1
       
        if root.left is None:
            return 1 + rightDepth
       
        if root.right is None:
            return 1 + leftDepth
       
        return min(leftDepth, rightDepth) + 1;  
