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

console.log(maxEqualRowsAfterFlips([[0,1],[1,1]])) // 1
console.log(maxEqualRowsAfterFlips([[0,1],[1,0]])) // 2
console.log(maxEqualRowsAfterFlips([[0,0,0],[0,0,1],[1,1,0]])) // 2
console.log(maxEqualRowsAfterFlips([[1,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,0]])) // 1
console.log(maxEqualRowsAfterFlips([[1,1],[0,1],[1,0],[0,0],[1,0],[1,0],[0,1],[1,0],[0,0],[1,0]])) // 7
console.log(maxEqualRowsAfterFlips([[0,0,0],[0,1,0],[0,0,1],[0,0,0],[0,0,0],[1,1,0],[1,1,1],[1,1,1],[1,1,1],[1,0,1]])) // 6
console.log(maxEqualRowsAfterFlips([[0,1,1,0,0],[1,1,0,1,1],[1,1,1,1,0],[0,0,0,1,0],[0,0,0,1,1],[0,1,0,1,1],[0,1,1,1,1],[1,0,0,1,0],[1,0,0,0,0],[0,1,1,0,0]])) // 2