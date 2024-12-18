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

console.log(finalPrices([8, 4, 6, 2, 3])); // [4,2,4,2,3]
console.log(finalPrices([1, 2, 3, 4, 5])); // [1,2,3,4,5]
console.log(finalPrices([10, 1, 1, 6])); // [9,0,1,6]
