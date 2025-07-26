/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    const ans = [];

    for (let i = 0; i <= n; i++) {
        const binaryDigit = i.toString(2);
        const numberOfOnes = [...binaryDigit].reduce((acc, curr) => acc + (curr === '1' ? +curr : 0), 0);
        ans.push(numberOfOnes);
    }

    return ans;
};

console.log(countBits(2)) // [0,1,1]
console.log(countBits(5)) // [0,1,1,2,1,2]