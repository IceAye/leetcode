// ❓ DESCRIPTION:
// Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted.

// ❗ CONSTRAINTS:
// 3 <= points.length <= 50
// -50 <= xi, yi <= 50
// All the given points are unique.

// ✅ SOLUTION (98.63% runtime, 94.52% memory):
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

// 📌 TESTCASE:
console.log(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]])) // 2.00000
console.log(largestTriangleArea([[1,0],[0,0],[0,1]])) // 0.50000
console.log(largestTriangleArea([[4,6],[6,5],[3,1]])) // 5.50000