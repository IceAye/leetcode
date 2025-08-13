/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
    return (Math.log(n) /  Math.log(3)).toFixed(10).endsWith('.0000000000')
};

console.log(isPowerOfThree(27)) // true
console.log(isPowerOfThree(9)) // true
console.log(isPowerOfThree(81)) // true
console.log(isPowerOfThree(387420488)) // false
console.log(isPowerOfThree(0)) // false
console.log(isPowerOfThree(-1)) // false
console.log(isPowerOfThree(533411731)) // false