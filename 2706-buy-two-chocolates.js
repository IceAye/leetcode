// ❓ DESCRIPTION:
// You are given an integer array prices representing the prices of various chocolates in a store. You are also given a single integer money, which represents your initial amount of money.
// You must buy exactly two chocolates in such a way that you still have some non-negative leftover money. You would like to minimize the sum of the prices of the two chocolates you buy.
// Return the amount of money you will have leftover after buying the two chocolates. If there is no way for you to buy two chocolates without ending up in debt, return money. Note that the leftover must be non-negative.
//
// ✅ SOLUTION:
const buyChoco = function(prices, money) {
    let sorted = prices.sort((a, b) => a - b);
    let leftover = money - sorted[0] - sorted[1];
    return leftover < 0 ? money : leftover === 0 ? 0 : leftover;
};

// 📌 TESTCASE:
console.log(buyChoco([1,2,2], 3)) // 0
console.log(buyChoco([3,2,3], 3)) // 3
