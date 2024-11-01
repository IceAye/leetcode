// ❓ DESCRIPTION:
// Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.
// Answers within 10-5 of the actual answer will be considered accepted.
//
// ✅ SOLUTION:
let trimMean = function(arr) {
    let index = arr.length / 20;
    let resulrArr = arr.sort((a, b) => a - b).slice(index, -index)
    return +(resulrArr.reduce((acc, curr) => acc + curr, 0) / resulrArr.length).toFixed(5)
};

// 📌 TESTCASE:
console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3])) // 2.00000
console.log(trimMean([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0])) // 4.00000
console.log(trimMean([6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4])) // 4.77778