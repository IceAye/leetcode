// ❓ DESCRIPTION:
// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.
// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:
// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.
// 📅(daily question 2025 August, 4th)

// ✅ SOLUTION (83.07% runtime, 70.84% memory):
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

// 📌 TESTCASE:
console.log(totalFruit([1,2,1])) // 3
console.log(totalFruit([0,1,2,2])) // 3
console.log(totalFruit([1,2,3,2,2])) // 4