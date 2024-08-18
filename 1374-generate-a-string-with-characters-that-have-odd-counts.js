let generateTheString = function (n) {
    return n % 2 === 0 ? "a".repeat(n - 1) + "b" : "a".repeat(n);
};

console.log(generateTheString(4));
console.log(generateTheString(2));
console.log(generateTheString(7));
