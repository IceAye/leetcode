// ❓ DESCRIPTION:
// Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.
// A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.
// Note that points on the edge of a vertical area are not considered included in the area.

// ❗ CONSTRAINTS:
// n == points.length
// 2 <= n <= 10^5
// points[i].length == 2
// 0 <= x^i, y^i <= 109

// ✅ SOLUTION:
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

// 📌 TESTCASE:
console.log(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]])) // 1
console.log(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]])) // 3