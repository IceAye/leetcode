// ❓ DESCRIPTION:
// You are given a 2D 0-indexed integer array dimensions.
// For all indices i, 0 <= i < dimensions.length, dimensions[i][0] represents the length and dimensions[i][1] represents the width of the rectangle i.
// Return the area of the rectangle having the longest diagonal. If there are multiple rectangles with the longest diagonal, return the area of the rectangle having the maximum area.

// ✅ SOLUTION:
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

// 📌 TESTCASE:
console.log(areaOfMaxDiagonal([[9,3],[8,6]])) // 48
console.log(areaOfMaxDiagonal([[3,4],[4,3]])) // 12