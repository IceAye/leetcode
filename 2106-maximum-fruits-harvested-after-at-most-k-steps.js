// ❓ DESCRIPTION:
// Fruits are available at some positions on an infinite x-axis. You are given a 2D integer array fruits where fruits[i] = [positioni, amounti] depicts amounti fruits at the position positioni. fruits is already sorted by positioni in ascending order, and each positioni is unique.
// You are also given an integer startPos and an integer k. Initially, you are at the position startPos. From any position, you can either walk to the left or right. It takes one step to move one unit on the x-axis, and you can walk at most k steps in total. For every position you reach, you harvest all the fruits at that position, and the fruits will disappear from that position.
// Return the maximum total number of fruits you can harvest.
// (daily question 2025 August, 3rd)

// ✅ SOLUTION:
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

// 📌 TESTCASE:
console.log(maxTotalFruits([[2,8],[6,3],[8,6]], 5, 4)) // 9
console.log(maxTotalFruits([[0,9],[4,1],[5,7],[6,2],[7,4],[10,9]], 5, 4)) // 14
console.log(maxTotalFruits([[0,3],[6,4],[8,5]], 3, 2)) // 0