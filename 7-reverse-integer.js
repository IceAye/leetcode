// ❓ DESCRIPTION:
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// ✅ SOLUTION:
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    const sign = Math.sign(x);
    const num = parseInt([...x.toString()].reverse().join('')) * sign;

    function isWithin32BitIntRange(number) {
        const MIN_32_BIT_INT = -2147483648;
        const MAX_32_BIT_INT = 2147483647;

        return (
            Number.isInteger(number) &&
            number >= MIN_32_BIT_INT &&
            number <= MAX_32_BIT_INT
        );
    }

    return isWithin32BitIntRange(num) ? num : 0;
};

// 📌 TESTCASE:
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21