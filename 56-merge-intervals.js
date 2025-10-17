// ❓ DESCRIPTION:
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// ❗ CONSTRAINTS:
// 1 <= intervals.length <= 10^4
// intervals[i].length == 2
// 0 <= starti <= endi <= 10^4

// ✅ SOLUTION (94.30% runtime, 12.32% memory):
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];

    for (const [start, end] of intervals) {
        let lastInterval = result[result.length - 1];
        if (!lastInterval || start > lastInterval[1]) {
            result.push([start, end]);
        } else {
            lastInterval[1] = Math.max(lastInterval[1], end);
        }
    }
    return result;
};

// 📌 TESTCASE:
console.log(merge([[1 , 3] , [2 , 6] , [8 , 10] , [15 , 18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1 , 4] , [4 , 5]])); // [[1,5]]
console.log(merge([[4 , 7] , [1 , 4]])); // [[1,7]]