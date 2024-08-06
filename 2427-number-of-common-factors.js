let commonFactors = function (a, b) {
    let min = Math.min(a, b);
    let factors = 0;
    for (let i = 1; i <= min; i++) {
        if (a % i === 0 && b % i === 0) factors++;
    }
    return factors;
};

console.log(commonFactors(12, 6));
console.log(commonFactors(25, 30));