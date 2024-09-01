// ❓ DESCRIPTION:
// Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.
//
// In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.
//
// Return an array containing the index of the row, and the number of ones in it.
//
// ✅ SOLUTION:
let rowAndMaximumOnes = function (mat) {
    let array = [];
    for (let i = 0; i < mat.length; i++) {
        array.push(mat[i].reduce((sum, current) => sum + current));
    }
    let max = Math.max(...array);
    return [array.indexOf(max), max];
};

console.log(
    rowAndMaximumOnes([
        [0, 1],
        [1, 0],
    ]),
);
console.log(
    rowAndMaximumOnes([
        [0, 0, 0],
        [0, 1, 1],
    ]),
);
console.log(
    rowAndMaximumOnes([
        [0, 0],
        [1, 1],
        [0, 0],
    ]),
);
