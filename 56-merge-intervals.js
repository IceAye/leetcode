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

console.log(merge([[1 , 3] , [2 , 6] , [8 , 10] , [15 , 18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1 , 4] , [4 , 5]])); // [[1,5]]
console.log(merge([[4 , 7] , [1 , 4]])); // [[1,7]]