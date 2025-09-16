// ❓ DESCRIPTION:
// You are given an array of integers nums. Perform the following steps:
//
// Find any two adjacent numbers in nums that are non-coprime.
// If no such numbers are found, stop the process.
// Otherwise, delete the two numbers and replace them with their LCM (Least Common Multiple).
// Repeat this process as long as you keep finding two adjacent non-coprime numbers.
// Return the final modified array. It can be shown that replacing adjacent non-coprime numbers in any arbitrary order will lead to the same result.
//
// The test cases are generated such that the values in the final array are less than or equal to 108.
//
// Two values x and y are non-coprime if GCD(x, y) > 1 where GCD(x, y) is the Greatest Common Divisor of x and y.
// (daily question 2025 September, 16th).
//
// ❗ Constraints:
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105
// The test cases are generated such that the values in the final array are less than or equal to 108.

// ✅ SOLUTION:
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const replaceNonCoprimes = function(nums) {

    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    function lcm(a,b) {
        return (a * b) / gcd(a, b);
    }

    function areNonCoprime(x, y) {
        return gcd(x, y) > 1;
    }

    const stack = [];

    for (let num of nums) {
        while (stack.length && areNonCoprime(stack[stack.length - 1], num)) {
            num = lcm(stack.pop(), num);
        }
        stack.push(num);
    }

    nums = [...stack];

    return nums;
};

// 📌 TESTCASE:
console.log(replaceNonCoprimes([6,4,3,2,7,6,2])) // [12,7,6]
console.log(replaceNonCoprimes([2,2,1,1,3,3,3])) // [2,1,1,3]