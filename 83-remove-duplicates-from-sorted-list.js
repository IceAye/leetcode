function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
    if (head === null || head.next === null) {
        return head;
    }

    let current = head;
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};

console.log(
    deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2)))),
);
