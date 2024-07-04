// ❓ DESCRIPTION:
// Given an integer num, return the number of steps to reduce it to zero.
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
//
// 📌 EXAMPLES:
// Input: num = 14 --> Output: 6
// Input: num = 8 --> Output: 4
// Input: num = 123 --> Output: 12
//
// ✅ SOLUTION:
let numberOfSteps = function ( num ) {
    let step = 0;
    while (num > 0) {
        num % 2 === 0 ? num /= 2 : num--
        step++
    }
    return step
}

console.log('Output: ' , numberOfSteps(14))
console.log('Output: ' , numberOfSteps(8))
console.log('Output: ' , numberOfSteps(123))