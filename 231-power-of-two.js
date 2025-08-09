/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    let i = 0;
    while (2 ** i <= n) {
        if (2 ** i === n) return true;
        i++;
    }
    return false;
};

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(16)) // true
console.log(isPowerOfTwo(3)) // false