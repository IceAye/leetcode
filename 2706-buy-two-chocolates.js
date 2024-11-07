const buyChoco = function(prices, money) {
    let sorted = prices.sort((a, b) => a - b);
    let leftover = money - sorted[0] - sorted[1];
    return leftover < 0 ? money : leftover === 0 ? 0 : leftover;
};

console.log(buyChoco([1,2,2], 3)) // 0
console.log(buyChoco([3,2,3], 3)) // 3
