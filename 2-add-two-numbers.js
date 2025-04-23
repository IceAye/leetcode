// ❓ DESCRIPTION:
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// ✅ SOLUTION (runtime 87.05%, memory 87.55%):
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const addTwoNumbers = function (l1, l2) {
    let node = new ListNode();
    let current = node;
    let remain = 0;

    while (l1 || l2 || remain) {
        let value1 = l1 ? l1.val : 0;
        let value2 = l2 ? l2.val : 0;

        let total = value1 + value2 + remain;
        remain = Math.floor(total / 10);
        let digit = total % 10;

        current.next = new ListNode(digit);
        current = current.next;

        l1 = l1.next || 0;
        l2 = l2.next || 0;
    }
    return node.next;
};

// 📌 TESTCASE:
console.log(addTwoNumbers({val: 2, next: { val: 4, next: { val: 3, next: null}}}, {val: 5, next: { val: 6, next: { val: 4, next: null}}})) // {val: 7, next: ListNode { val: 0, next: ListNode { val: 8, next: null } }}