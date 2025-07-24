/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function(n, start) {
    let xor = 0;

    for (let i = 0; i < n; i++) {
        xor ^= start + 2 * i;
    }

    return xor;
};

console.log(xorOperation(5, 0)) // 8
console.log(xorOperation(4, 3)) // 8