let timeRequiredToBuy = function (tickets, k) {
    let result = 0;
    for (let i = 0; i < tickets.length; ++i) {
        result += Math.min(tickets[i], i <= k ? tickets[k] : tickets[k] - 1);
    }
    return result;
};

console.log(timeRequiredToBuy([2, 3, 2], 2)); // 6
console.log(timeRequiredToBuy([5, 1, 1, 1], 0)); // 8
console.log(timeRequiredToBuy([84,49,5,24,70,77,87,8], 3)); // 154
