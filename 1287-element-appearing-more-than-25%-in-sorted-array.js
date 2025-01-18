// ❓ DESCRIPTION:
// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.
//
// ✅ SOLUTION 1 (51% runtime):
const findSpecialInteger = function (arr) {
    let maxCount = new Map();
    for (const num of arr) {
        maxCount.set(num, maxCount.get(num) + 1 || 1);
        if (maxCount.get(num) > Math.floor(0.25 * arr.length)) {
            return num;
        }
    }
};

// ✅ SOLUTION 2 (79% runtime):
const findSpecialInteger = function (arr) {
    let sliding = Math.floor(0.25 * arr.length);
    for (let i = 0; i < arr.length - sliding; i++) {
        if (arr[i] === arr[i + sliding]) return arr[i];
    }
};

// 📌 TESTCASE:
console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10])) // 6
console.log(findSpecialInteger([1, 1])) // 1