/**
 * @param {string} num
 * @return {boolean}
 */
const isBalanced = function(num) {
    let sumOfEvens = 0;
    let sumOfOdds = 0;
    for (let i = 0; i < num.length; i++) {
        if (i % 2 === 0) {
            sumOfEvens += +num[i];
        } else {
            sumOfOdds += +num[i];
        }
    }
    return sumOfOdds === sumOfEvens;
};

console.log(isBalanced("1234")) // false
console.log(isBalanced("24123")) // true