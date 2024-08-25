// ❓ DESCRIPTION:
// Given an integer n, return any array containing n unique integers such that they add up to 0.
//
// ✅ SOLUTION:
let sumZero = function (n) {
    let array = [];
    for (let i = 1; i <= n / 2; i++) {
        array.push(i, -i);
    }
    return n % 2 === 0 ? array : [0, ...array];
};

console.log(sumZero(5));
console.log(sumZero(4));
console.log(sumZero(3));
console.log(sumZero(7));