/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
const recoverOrder = function(order, friends) {
    return friends.toSorted((a, b) => order.indexOf(a) - order.indexOf(b));
};

console.log(recoverOrder([3,1,2,5,4], [1,3,4])) // [3,1,4]
console.log(recoverOrder([1,4,5,3,2], [2,5])) // [5,2]