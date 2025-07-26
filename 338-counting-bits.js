// ❓ DESCRIPTION:
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// ✅ SOLUTION:
/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    const ans = [0];

    for (let i = 1; i <= n; i++) {
        const binaryDigit = i.toString(2);
        const numberOfOnes = [...binaryDigit].reduce((acc, curr) => acc + (curr === '1' ? +curr : 0), 0);
        ans.push(numberOfOnes);
    }

    return ans;
};

// 📌 TESTCASE:
console.log(countBits(2)) // [0,1,1]
console.log(countBits(5)) // [0,1,1,2,1,2]