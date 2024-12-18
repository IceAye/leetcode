// 📌 DESCRIPTION:
// You are given an integer array prices where prices[i] is the price of the ith item in a shop.
// There is a special discount for items in the shop. If you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Otherwise, you will not receive any discount at all.
// Return an integer array answer where answer[i] is the final price you will pay for the ith item of the shop, considering the special discount.
//
// ✅ SOLUTION:
const finalPrices = function (prices) {
    let result = [];
    for (let i = 0; i < prices.length; i++) {
        let temp = [];
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] >= prices[j]) {
                temp.push(prices[i] - prices[j]);
            }
        }
        temp.length > 0 ? result.push(temp[0]) : result.push(prices[i]);
    }
    return [...result];
};

// 📌 TESTCASE:
console.log(finalPrices([8, 4, 6, 2, 3])); // [4,2,4,2,3]
console.log(finalPrices([1, 2, 3, 4, 5])); // [1,2,3,4,5]
console.log(finalPrices([10, 1, 1, 6])); // [9,0,1,6]
