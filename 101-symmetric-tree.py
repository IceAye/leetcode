# ❓ DESCRIPTION:
# Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# ✅ SOLUTION (100% runtime):
class Solution(object):
    def isSymmetric(self, root):
        if root is None: 
            return True
        def check(left, right):
            if left is None and right is None:
                return True
            if left is None or right is None:
                return False
            else:
                return left.val == right.val and check(left.left, right.right) and check(left.right, right.left)
            
        return check(root.left, root.right)
        