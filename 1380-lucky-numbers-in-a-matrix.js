/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers = function(matrix) {
    const columnsMax = matrix[0].map((_, ind) => Math.max(...matrix.map(row => row[ind])) )
    const rowsMin = matrix.map(row => Math.min(...row));
    return rowsMin.filter(item => columnsMax.includes(item));
};

console.log(luckyNumbers([[3 , 7 , 8] , [9 , 11 , 13] , [15 , 16 , 17]])); // [15]
console.log(luckyNumbers([[1 , 10 , 4 , 2] , [9 , 3 , 8 , 7] , [15 , 16 , 17 , 12]])); // [12]
console.log(luckyNumbers([[7 , 8] , [1 , 2]])); // [7]