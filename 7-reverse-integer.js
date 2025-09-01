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

console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21