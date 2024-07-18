// ❓ DESCRIPTION:
// An integer divisible by the sum of its digits is said to be a Harshad number.
// You are given an integer x. Return the sum of the digits of x if x is a Harshad number, otherwise, return -1.
//
// ✅ SOLUTION:
let sumOfTheDigitsOfHarshadNumber = function(x) {
    let sumOfDigits = String(x).split('').map(item => Number(item)).reduce((sum, current) => sum + current)
    return x % sumOfDigits === 0 ? sumOfDigits : -1
}

console.log(sumOfTheDigitsOfHarshadNumber(18))
console.log(sumOfTheDigitsOfHarshadNumber(23))