// ❓ DESCRIPTION:
// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
//
// ✅ SOLUTION (100% runtime, 40.96% memory):
const diagonalSum = function (mat) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        if (mat.length % 2 === 1 && i === Math.floor(mat.length / 2)) {
            sum += mat[i][i];
        } else {
            sum += mat[i][i] + mat[i][mat.length - 1 - i];
        }
    }
    return sum;
};

// 📌 TESTCASE:
console.log(diagonalSum([[1,2,3],
    [4,5,6],
    [7,8,9]])) // 25

console.log(diagonalSum([[1,1,1,1],
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1]])) // 8

console.log(diagonalSum([[5]])) // 5
