// ❓ DESCRIPTION:
// You are given two arrays of integers, fruits and baskets, each of length n, where fruits[i] represents the quantity of the ith type of fruit, and baskets[j] represents the capacity of the jth basket.
// From left to right, place the fruits according to these rules:
// Each fruit type must be placed in the leftmost available basket with a capacity greater than or equal to the quantity of that fruit type.
// Each basket can hold only one type of fruit.
// If a fruit type cannot be placed in any basket, it remains unplaced.
// Return the number of fruit types that remain unplaced after all possible allocations are made.
// (daily question 2025 August, 5th)

// ✅ SOLUTION:
/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
const numOfUnplacedFruits = function(fruits, baskets) {
    let result = 0;

    for (let i = 0; i < fruits.length; i++) {
        const index = baskets.findIndex(basket => fruits[i] <= basket);
        if (index === -1) {
            result++;
        } else {
            baskets[index] = 0;
        }
    }

    return result;
};

// 📌 TESTCASE:
console.log(numOfUnplacedFruits([4,2,5], [3,5,4])) // 1
console.log(numOfUnplacedFruits([3,6,1], [6,4,7])) // 0