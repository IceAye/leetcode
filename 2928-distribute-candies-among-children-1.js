let distributeCandies = function (n, limit) {
    let count = 0;
    for (let i = 0; i <= limit; i++) {
        for (let j = 0; j <= limit; j++) {
            for (let k = 0; k <= limit; k++) {
                if (i + j + k > n) break;
                if (i + j + k === n) count++;
            }
        }
    }
    return count;
};

console.log(distributeCandies(5, 2));
console.log(distributeCandies(3, 3));
