/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = function(fruits) {
    let max = 0;
    let left = 0;
    const counts = new Map();

    for (let right = 0; right < fruits.length; right++) {
        const num = fruits[right];
        counts.set(num, counts.get(num) + 1 || 1);

        while (counts.size > 2) {
            const seenNum = fruits[left];
            counts.set(seenNum, counts.get(seenNum) - 1);
            if (counts.get(seenNum) === 0) counts.delete(seenNum);
            left++;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
}

console.log(totalFruit([1,2,1])) // 3
console.log(totalFruit([0,1,2,2])) // 3
console.log(totalFruit([1,2,3,2,2])) // 4