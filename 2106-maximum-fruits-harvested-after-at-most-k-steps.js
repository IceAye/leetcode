/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
const maxTotalFruits = function(fruits, startPos, k) {
    const n = fruits.length;
    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + fruits[i][1];
    }

    let max = 0;
    let left = 0;

    for (let right = 0; right < n; right++) {
        const rPos = fruits[right][0];
        while (
            left <= right &&
            Math.min(
                Math.abs(startPos - fruits[left][0]) + (rPos - fruits[left][0]),
                Math.abs(startPos - rPos) + (rPos - fruits[left][0])
            ) > k
            ) {
            left++;
        }

        max = Math.max(max, prefix[right + 1] - prefix[left]);
    }

    return max;
};

console.log(maxTotalFruits([[2,8],[6,3],[8,6]], 5, 4)) // 9
console.log(maxTotalFruits([[0,9],[4,1],[5,7],[6,2],[7,4],[10,9]], 5, 4)) // 14
console.log(maxTotalFruits([[0,3],[6,4],[8,5]], 3, 2)) // 0