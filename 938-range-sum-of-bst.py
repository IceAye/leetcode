# ❓ DESCRIPTION:
# Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

# ✅ SOLUTION:

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution(object):
    def rangeSumBST(self, root, low, high):
        if not root:
            return 0
        if root.val < low: 
            return self.rangeSumBST(root.right, low, high)
        if root.val > high:
            return self.rangeSumBST(root.left, low, high)
        
        return root.val +  self.rangeSumBST(root.right, low, high) + self.rangeSumBST(root.left, low, high)
        