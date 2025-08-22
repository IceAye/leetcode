/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function(n) {
    return n.toString(2).match(/1/g).length;
};

console.log(hammingWeight(11)) // 3
console.log(hammingWeight(128)) // 1
console.log(hammingWeight(2147483645)) // 30