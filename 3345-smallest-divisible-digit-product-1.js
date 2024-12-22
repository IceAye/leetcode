const smallestNumber = function(n, t) {
    for (let i = n; ; i++) {
        let number = Array.from(i.toString(), Number).reduce((acc, curr) => acc * curr);
        if (number % t === 0) return i;
    }
};

console.log(smallestNumber(10, 2)) // 10
console.log(smallestNumber(15, 3)) // 16