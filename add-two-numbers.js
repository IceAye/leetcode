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