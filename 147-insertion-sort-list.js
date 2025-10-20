
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

// TESTCASE:
console.log(insertionSortList(new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))))));
console.log(insertionSortList(new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))))));