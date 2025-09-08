// ❓ DESCRIPTION:
// No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.
//
// Given an integer n, return a list of two integers [a, b] where:
//
// a and b are No-Zero integers.
// a + b = n
// The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.
// 📅 (daily question 2025 September, 8th)

// ✅ SOLUTION (100% runtime):
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

// 📌 TESTCASE:
console.log(getNoZeroIntegers(2)); // [1,1]
console.log(getNoZeroIntegers(11)); // [2,9]