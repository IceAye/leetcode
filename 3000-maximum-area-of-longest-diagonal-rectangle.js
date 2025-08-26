/**
 * @param {number[][]} dimensions
 * @return {number}
 */
const areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonal = 0;
    let maxSquare = 0;

    for (const [length, width] of dimensions) {
        let square = length * width;
        const diagonal = Math.hypot(length, width);
        if (diagonal > maxDiagonal) {
            maxDiagonal = diagonal;
            maxSquare = square;
        } else if (diagonal === maxDiagonal) {
            maxSquare = Math.max(maxSquare, square);
        }
    }

    return maxSquare;
}

console.log(areaOfMaxDiagonal([[9,3],[8,6]])) // 48
console.log(areaOfMaxDiagonal([[3,4],[4,3]])) // 12