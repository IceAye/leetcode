// ❓ DESCRIPTION:
// You are given a 0-indexed integer array nums and an integer k.
// Your task is to perform the following operation exactly k times in order to maximize your score:
//
// Select an element m from nums.
// Remove the selected element m from the array.
// Add a new element with a value of m + 1 to the array.
// Increase your score by m.
// Return the maximum score you can achieve after performing the operation exactly k times.
//
// ✅ SOLUTION:
let maximizeSum = function ( nums , k ) {
    let num = Math.max(...nums)
    let result = num
    while (k - 1 > 0) {
        num++
        result += num
        k--
    }
    return result
}

console.log(maximizeSum([5 , 5 , 5] , 2))
console.log(maximizeSum([1 , 2 , 3 , 4 , 5] , 3))