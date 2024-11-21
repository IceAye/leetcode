// ❓ DESCRIPTION:
// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
// Return the largest lucky integer in the array. If there is no lucky integer return -1.
//
// ✅ SOLUTION:
const findLucky = function(arr) {
    let map = new Map();
    arr.map(item => map.set(item, map.get(item) + 1 || 1));
    return [...map.entries()].reduce((acc, curr) => {
        if (curr[0] === curr[1]) acc = Math.max(curr[0], acc);
        return acc;
    }, -1);
};

// 📌 TESTCASE:
console.log(findLucky([2,2,3,4])) // 2
console.log(findLucky([1,2,2,3,3,3])) // 3
console.log(findLucky([2,2,2,3,3])) // -1