// ❓ DESCRIPTION:
// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.
// You may assume that fn will never duplicate numbers for a given array.
//
// ✅ SOLUTION:
const sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

// 📌 TESTCASE:
console.log(sortBy([5, 4, 1, 2, 3], (x) => x)) // [1, 2, 3, 4, 5]
console.log(sortBy([{"x": 1}, {"x": 0}, {"x": -1}], (d) => d.x)) // [{"x": -1}, {"x": 0}, {"x": 1}]
console.log(sortBy([[3, 4], [5, 2], [10, 1]], (x) => x[1])) // [[10, 1], [5, 2], [3, 4]]
