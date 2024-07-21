// ❓ DESCRIPTION:
// You are given two arrays of equal length, nums1 and nums2.
// Each element in nums1 has been increased (or decreased in the case of negative) by an integer, represented by the variable x.
// As a result, nums1 becomes equal to nums2. Two arrays are considered equal
// when they contain the same integers with the same frequencies.
//
// Return the integer x.
//
// ✅ SOLUTION:
let addedInteger = function(nums1, nums2) {
    return Math.min(...nums2) - Math.min(...nums1)
}

console.log(addedInteger([2,6,4], [9,7,5]))
console.log(addedInteger([10], [5]))
console.log(addedInteger([1,1,1,1], [1,1,1,1]))