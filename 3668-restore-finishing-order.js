// ❓DESCRIPTION:
// You are given an integer array order of length n and an integer array friends.
// order contains every integer from 1 to n exactly once, representing the IDs of the participants of a race in their finishing order.
// friends contains the IDs of your friends in the race sorted in strictly increasing order. Each ID in friends is guaranteed to appear in the order array.
// Return an array containing your friends' IDs in their finishing order.

// ❗ CONSTRAINTS:
// 1 <= n == order.length <= 100
// order contains every integer from 1 to n exactly once
// 1 <= friends.length <= min(8, n)
// 1 <= friends[i] <= n
// friends is strictly increasing

// ✅ SOLUTION (85.94% runtime, 34.34% memory):
/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
const recoverOrder = function(order, friends) {
    return friends.toSorted((a, b) => order.indexOf(a) - order.indexOf(b));
};

// 📌 TESTCASE:
console.log(recoverOrder([3,1,2,5,4], [1,3,4])) // [3,1,4]
console.log(recoverOrder([1,4,5,3,2], [2,5])) // [5,2]