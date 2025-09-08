/**
 * @param {number} n
 * @return {number[]}
 */
const getNoZeroIntegers = function(n) {
    const hasZero = (number) => {
        return /0/g.test(number.toString());
    }

    for (let a = 1; a < n; a++) {
        if (!hasZero(a)) {
            const b = n - a;
            if (!hasZero(b)) return [a, b];
        }
    }
};

console.log(getNoZeroIntegers(2)); // [1,1]
console.log(getNoZeroIntegers(11)); // [2,9]