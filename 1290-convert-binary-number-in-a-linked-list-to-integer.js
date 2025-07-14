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

console.log(getDecimalValue(new ListNode(1, new ListNode(0, new ListNode(1, null))))); // 5
console.log(getDecimalValue(new ListNode(0, null))) //0