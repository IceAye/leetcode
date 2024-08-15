let totalMoney = function (n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += Math.floor(i/7) + 1 + i % 7;
    }

    return sum;
};

console.log(totalMoney(4));
console.log(totalMoney(10));
console.log(totalMoney(20));
