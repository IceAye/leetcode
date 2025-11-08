/**
 * @param {number} n
 * @return {number}
 */
const smallestNumber = function(n) {
    let i = n;
    while (/0/.test(i.toString(2))) {
        i++;
    }
    return i;
};

console.log(smallestNumber(5)) // 7
console.log(smallestNumber(10)) // 15
console.log(smallestNumber(3)) // 3