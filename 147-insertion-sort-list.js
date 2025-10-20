// ❓ DESCRIPTION:
// Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.
// The steps of the insertion sort algorithm:
// Insertion sort iterates, consuming one input element each repetition and growing a sorted output list.
// At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list and inserts it there.
// It repeats until no input elements remain.
// The following is a graphical example of the insertion sort algorithm. The partially sorted list (black) initially contains only the first element in the list. One element (red) is removed from the input data and inserted in-place into the sorted list with each iteration.

// ❗ CONSTRAINTS:
// The number of nodes in the list is in the range [1, 5000].
// -5000 <= Node.val <= 5000

// ✅ SOLUTION:
// Definition for singly-linked list
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const insertionSortList = function(head) {
    if (!head) return null;

    const keyNode = new ListNode(-Infinity);
    let curr = head;

    while (curr) {
        let next = curr.next;
        let prev = keyNode;

        while (prev.next && prev.next.val < curr.val) {
            prev = prev.next;
        }

        curr.next = prev.next;
        prev.next = curr;

        curr = next;
    }

    return keyNode.next;
};

// 📌 TESTCASE:
console.log(insertionSortList(new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))))));
console.log(insertionSortList(new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))))));