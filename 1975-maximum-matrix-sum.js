// ❓ DESCRIPTION:
// You are given an n x n integer matrix. You can do the following operation any number of times:
// Choose any two adjacent elements of matrix and multiply each of them by -1.
// Two elements are considered adjacent if and only if they share a border.
// Your goal is to maximize the summation of the matrix's elements. Return the maximum sum of the matrix's elements using the operation mentioned above.
//
// ✅ SOLUTION:
const maxMatrixSum = function(matrix) {
    let absoluteSum = 0;
    let count = 0;
    let min = +Infinity;
    matrix.flat().map((item) => {
        if (item < 0) count++;
        let absoluteNumber = Math.abs(item);
        absoluteSum += absoluteNumber;
        min = Math.min(min, absoluteNumber);
        return item;
    });
    return count % 2 === 0 ? absoluteSum : absoluteSum - 2 * min;
};

// 📌 TESTCASE:
console.log(maxMatrixSum([[1,-1],[-1,1]])) // 4
console.log(maxMatrixSum([[1,2,3],[-1,-2,-3],[1,2,3]])) // 16