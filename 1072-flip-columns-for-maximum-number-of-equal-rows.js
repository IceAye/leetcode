// ❓ DESCRIPTION:
// You are given an m x n binary matrix matrix.
// You can choose any number of columns in the matrix and flip every cell in that column (i.e., Change the value of the cell from 0 to 1 or vice versa).
// Return the maximum number of rows that have all values equal after some number of flips.
//
// ✅ SOLUTION (runtime 36 ms, 80%):
const maxEqualRowsAfterFlips = function(matrix) {
    let array = [];
    for (const row of matrix) {
        let temp = "*";
        for (let i = 1; i < row.length; i++) {
            if (row[i] === row[i - 1]) {
                temp += "*"
            } else temp += "|*"
        }
        array.push(temp)
    }
    let map = new Map();
    array.map(item => map.set(item, map.get(item) + 1 || 1))
    return Math.max(...map.values())
};

// 📌 TESTCASE:
console.log(maxEqualRowsAfterFlips([[0,1],[1,1]])) // 1
console.log(maxEqualRowsAfterFlips([[0,1],[1,0]])) // 2
console.log(maxEqualRowsAfterFlips([[0,0,0],[0,0,1],[1,1,0]])) // 2
console.log(maxEqualRowsAfterFlips([[1,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,0]])) // 1
console.log(maxEqualRowsAfterFlips([[1,1],[0,1],[1,0],[0,0],[1,0],[1,0],[0,1],[1,0],[0,0],[1,0]])) // 7
console.log(maxEqualRowsAfterFlips([[0,0,0],[0,1,0],[0,0,1],[0,0,0],[0,0,0],[1,1,0],[1,1,1],[1,1,1],[1,1,1],[1,0,1]])) // 6
console.log(maxEqualRowsAfterFlips([[0,1,1,0,0],[1,1,0,1,1],[1,1,1,1,0],[0,0,0,1,0],[0,0,0,1,1],[0,1,0,1,1],[0,1,1,1,1],[1,0,0,1,0],[1,0,0,0,0],[0,1,1,0,0]])) // 2