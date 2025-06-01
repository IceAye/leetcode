const distributeCandies = function(n, limit) {
    let result = 0;

    for (let i = 0; i <= Math.min(n, limit); i++) {
        result += Math.max(Math.min(limit, n - i) - Math.max(0, n - i - limit) + 1, 0);
    }
    return result;
};

console.log(distributeCandies(5, 2)) // 3
console.log(distributeCandies(3, 3)) // 10
