# ❓ DESCRIPTION:
# Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
# Return the decimal value of the number in the linked list.
# The most significant bit is at the head of the linked list.

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# ✅ SOLUTION (100% runtime, 80.25% memory):
class Solution(object):
    def getDecimalValue(self, head):
        value = ''

        while head: 
            value += str(head.val)
            head = head.next
        
        return int(value, 2)
        