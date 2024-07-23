// ❓ DESCRIPTION:
// Given an array of integers nums, sort the array in increasing order based on the frequency of the values.
// If multiple values have the same frequency, sort them in decreasing order.
//
// Return the sorted array.
//
// ✅ SOLUTION:

let frequencySort = function (nums) {
    let obj = new Map()
    for (let i = 0; i < nums.length; i++) {
        obj.set(nums[i], (obj.get(nums[i]) + 1) || 1)
    }
    return nums.sort((a, b) =>
        obj.get(a) - obj.get(b) || b - a
    )
}

console.log(frequencySort([1, 1, 2, 2, 2, 3]))
console.log(frequencySort([2, 3, 1, 3, 2]))
