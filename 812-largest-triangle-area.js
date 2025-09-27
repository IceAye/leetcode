/**
 * @param {number[][]} points
 * @return {number}
 */
const largestTriangleArea = function(points) {
    let max = 0;
    for (let i = 0; i < points.length - 2; i++) {
        for (let j = i + 1; j < points.length - 1; j++) {
            for (let k = j + 1; k < points.length; k++) {
                const area = 0.5 * Math.abs(points[i][0] * (points[j][1] - points[k][1]) + points[j][0] * (points[k][1] - points[i][1]) + points[k][0] * (points[i][1] - points[j][1]));
                max = Math.max(max, area);
            }
        }
    }
    return max;
};

console.log(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]])) // 2.00000
console.log(largestTriangleArea([[1,0],[0,0],[0,1]])) // 0.50000
console.log(largestTriangleArea([[4,6],[6,5],[3,1]])) // 5.50000