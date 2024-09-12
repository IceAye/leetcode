// ❓ DESCRIPTION:
// You are given an integer array nums consisting of 2 * n integers.
//
// You need to divide nums into n pairs such that:
//
// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.
//
// ✅ SOLUTION:
let divideArray = function (nums) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, map.get(num) + 1 || 1);
    }
    return [...map.values()].every((value) => value % 2 === 0);
};

console.log(divideArray([3,2,3,2,2,2]));
console.log(divideArray([1,2,3,4]));