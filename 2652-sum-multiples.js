// ❓ DESCRIPTION:
// Given a positive integer n, find the sum of all integers in the range [1, n] inclusive
// that are divisible by 3, 5, or 7.
// Return an integer denoting the sum of all numbers in the given range satisfying the constraint.
//
// 📌 EXAMPLES:
// Input: n = 7 --> Output: 21
// Input: n = 10 --> Output: 40
// Input: n = 9 --> Output: 30
//
// ✅ SOLUTION:

let sumOfMultiples = function(n) {
    let result = 0
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            result += i
        }
    }
    return result
}

console.log('Output: ' ,sumOfMultiples(7))
console.log('Output: ' ,sumOfMultiples(10))
console.log('Output: ' ,sumOfMultiples(9))