/**
 * @param {number} n
 * @return {string}
 */
const concatHex36 = function(n) {
    const hexadecimal = Math.pow(n, 2).toString(16);
    const hexatrigesimal = Math.pow(n, 3).toString(36);
    return (hexadecimal + hexatrigesimal).toUpperCase();
};

console.log(concatHex36(13)) // "A91P1"
console.log(concatHex36(36)) // "5101000"