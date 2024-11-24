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


console.log(maxMatrixSum([[1,-1],[-1,1]])) // 4
console.log(maxMatrixSum([[1,2,3],[-1,-2,-3],[1,2,3]])) // 16