// ❓ DESCRIPTION:
// A cell (r, c) of an excel sheet is represented as a string "<col><row>" where:
//
// <col> denotes the column number c of the cell. It is represented by alphabetical letters.
// For example, the 1st column is denoted by 'A', the 2nd by 'B', the 3rd by 'C', and so on.
// <row> is the row number r of the cell. The rth row is represented by the integer r.
// You are given a string s in the format "<col1><row1>:<col2><row2>", where <col1> represents the column c1, <row1> represents the row r1, <col2> represents the column c2, and <row2> represents the row r2, such that r1 <= r2 and c1 <= c2.
//
// Return the list of cells (x, y) such that r1 <= x <= r2 and c1 <= y <= c2. The cells should be represented as strings in the format mentioned above and be sorted in non-decreasing order first by columns and then by rows.
//
// ✅ SOLUTION (100% runtime, 82.54% memory):
const cellsInRange = function(s) {
    let result = [];

    const [[row1, col1], [row2, col2]] = s.split(':');
    for (let i = row1.charCodeAt(0); i <= row2.charCodeAt(0); i++ ) {
        let j = +col1;
        while (j <= +col2) {
            result.push(String.fromCharCode(i) + j);
            j++;
        }
    }

    return result;
};

// 📌 TESTCASE:
console.log(cellsInRange("K1:L2")) // ["K1","K2","L1","L2"]
console.log(cellsInRange("A1:F1")) // ["A1","B1","C1","D1","E1","F1"]
console.log(cellsInRange("U7:X9")) // ["U7","U8","U9","V7","V8","V9","W7","W8","W9","X7","X8","X9"]