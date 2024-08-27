// ❓ DESCRIPTION:
// You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty subarray of arr and reverse it. You are allowed to make any number of steps.
//
// Return true if you can make arr equal to target or false otherwise.
//
// ✅ SOLUTION:
let canBeEqual = function (target, arr) {
    return target.sort((a, b) => a - b).toString() === arr.sort((a, b) => a - b).toString()
};

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
console.log(canBeEqual([7], [7]));
console.log(canBeEqual([3, 7, 9], [3, 7, 11]));
