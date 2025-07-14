// ❓ DESCRIPTION:
// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
// Return the decimal value of the number in the linked list.
// The most significant bit is at the head of the linked list.
// (daily question 2025 July, 14).

// ✅ SOLUTION (100% runtime, 72.05% memory):
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValue = function (head) {
    let decimalValue = "";

    while (head) {
        decimalValue += head.val;
        head = head.next
    }

    return parseInt(decimalValue, 2);
};

// 📌 TESTCASE:
console.log(getDecimalValue(new ListNode(1, new ListNode(0, new ListNode(1, null))))); // 5
console.log(getDecimalValue(new ListNode(0, null))) //0