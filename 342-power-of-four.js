/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function(n) {
    return Number.isInteger(Math.log(n) / Math.log(4));
};

console.log(isPowerOfFour(16)) // true
console.log(isPowerOfFour(5)) // false
console.log(isPowerOfFour(1)) // true