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

console.log(replaceNonCoprimes([6,4,3,2,7,6,2])) // [12,7,6]
console.log(replaceNonCoprimes([2,2,1,1,3,3,3])) // [2,1,1,3]