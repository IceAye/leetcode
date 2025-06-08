// ❓ DESCRIPTION:
// Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.
// You must write an algorithm that runs in O(n) time and uses O(1) extra space.
//
// ✅ SOLUTION:
const lexicalOrder = function(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    return array.sort();
};

// 📌 TESTCASE:
console.log(lexicalOrder(13)) // [1,10,11,12,13,2,3,4,5,6,7,8,9]
console.log(lexicalOrder(2)) // [1,2]
