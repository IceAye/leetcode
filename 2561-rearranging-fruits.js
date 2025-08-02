// ❓ DESCRIPTION:
// You have two fruit baskets containing n fruits each. You are given two 0-indexed integer arrays basket1 and basket2 representing the cost of fruit in each basket. You want to make both baskets equal. To do so, you can use the following operation as many times as you want:
//
// Chose two indices i and j, and swap the ith fruit of basket1 with the jth fruit of basket2.
// The cost of the swap is min(basket1[i],basket2[j]).
// Two baskets are considered equal if sorting them according to the fruit cost makes them exactly the same baskets.
//
// Return the minimum cost to make both the baskets equal or -1 if impossible.
// (daily question 2025 August, 2nd)

// ✅ SOLUTION:
/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
const minCost = function(basket1, basket2) {
    let freqMap = new Map();

    for (let i = 0; i < basket1.length; i++) {
        freqMap.set(basket1[i] , (freqMap.get(basket1[i]) || 0) + 1);
        freqMap.set(basket2[i] , (freqMap.get(basket2[i]) || 0) - 1);
    }

    const costs = [];
    let minElement = Infinity;

    for (const [key , value] of freqMap) {
        minElement = Math.min(minElement , key);
        if (value % 2 !== 0) return -1;
        let diff = Math.abs(value) / 2;
        for (let i = 0; i < diff; i++) {
            costs.push(key);
        }
    }

    costs.sort((a , b) => a - b);
    let result = 0;
    for (let i = 0; i < costs.length / 2; i++) {
        result += Math.min(costs[i] , 2 * minElement);
    }

    return result;
}

// 📌 TESTCASE:
console.log(minCost([4,2,2,2], [1,4,1,2])) // 1
console.log(minCost([2,3,4,1], [3,2,5,1])) // -1
console.log(minCost([4,4,4,4,3], [5,5,5,5,3])) // 8