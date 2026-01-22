/**
 * @param {number[][]} points
 * @return {number}
 */
const maxWidthOfVerticalArea = function(points) {
    let max = -Infinity;
    points.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < points.length - 1; i++) {
        max = Math.max(max, points[i + 1][0] - points[i][0]);
    }

    return max;
};

console.log(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]])) // 1
console.log(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]])) // 3