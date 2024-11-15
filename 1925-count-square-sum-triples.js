const countTriples = function(n) {
    let count = 0;
    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            let squared = Math.sqrt(a * a + b * b);
            if (squared <= n && Number.isInteger(squared)) count++;
        }
    }
    return count;
};

console.log(countTriples(5)) // 2
console.log(countTriples(10)) // 4