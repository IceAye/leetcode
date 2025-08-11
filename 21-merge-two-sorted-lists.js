// ❓ DESCRIPTION:
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// ✅ SOLUTION (100% runtime, 83,73% memory):
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/*
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    let result = new ListNode();
    let currentList = result;

    while (list1 && list2) {
        if (list1.val > list2.val) {
            currentList.next = list2;
            list2 = list2.next;
        } else {
            currentList.next = list1;
            list1 = list1.next;
        }
        currentList = currentList.next;
    }

    currentList.next = list1 || list2;
    return result.next;
};

// 📌 TESTCASE:
console.log(mergeTwoLists(new ListNode(1, (new ListNode(2, new ListNode(4)))), new ListNode(1, new ListNode(3, new ListNode(4))))); // [1,1,2,3,4,4]