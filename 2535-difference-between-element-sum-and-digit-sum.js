// ❓ DESCRIPTION:
// You are given a positive integer array nums.
//
// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.
//
// Note that the absolute difference between two integers x and y is defined as |x - y|.
//
// ✅ SOLUTION:
let differenceOfSum = function ( nums ) {
    function sum ( value ) {
        return value.reduce(( sum , current ) => sum + current)
    }

    let digits = nums.join('').split('').map(Number)
    return Math.abs(sum(nums) - sum(digits))
}

console.log('Output: ' , differenceOfSum([1 , 15 , 6 , 3]))
console.log('Output: ' , differenceOfSum([1 , 2 , 3 , 4]))