// ❓ DESCRIPTION:
// You are given a 0-indexed integer array nums of even length and there is also an empty array arr.
// Alice and Bob decided to play a game where in every round Alice and Bob will do one move.
// The rules of the game are as follows:
//     Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
//     Now, first Bob will append the removed element in the array arr, and then Alice does the same.
//     The game continues until nums becomes empty.
//     Return the resulting array arr.
//
// 📌 EXAMPLES:
// Input = [5,4,2,3] Output = [3,2,5,4]
// Input = [2,5] Output = [5,2]
//
// ✅ SOLUTION:
let numberGame = function(nums) {
    nums.sort((a, b) => a - b)
    let arr = []
    for (let i = 0; i < nums.length; i += 2) {
        arr.push(nums[i+1], nums[i])
    }
    return arr
}

console.log('Output: ' , numberGame([5,4,2,3]))
console.log('Output: ' , numberGame([2,5]))