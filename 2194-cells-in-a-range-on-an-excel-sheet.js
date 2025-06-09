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


console.log(cellsInRange("K1:L2")) // ["K1","K2","L1","L2"]
console.log(cellsInRange("A1:F1")) // ["A1","B1","C1","D1","E1","F1"]
console.log(cellsInRange("U7:X9")) // ["U7","U8","U9","V7","V8","V9","W7","W8","W9","X7","X8","X9"]