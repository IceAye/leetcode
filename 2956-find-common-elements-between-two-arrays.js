// ❓ DESCRIPTION:
// You are given two integer arrays nums1 and nums2 of sizes n and m, respectively. Calculate the following values:
// answer1 : the number of indices i such that nums1[i] exists in nums2.
// answer2 : the number of indices i such that nums2[i] exists in nums1.
// Return [answer1,answer2].
//
// ✅ SOLUTION:

let findIntersectionValues = function(nums1, nums2) {
    let answer1 = nums1.filter(item => nums2.includes(item)).length
    let answer2 = nums2.filter(item => nums1.includes(item)).length
    return [answer1, answer2]
}

console.log(findIntersectionValues([2,3,2], [1,2]))
console.log(findIntersectionValues([4,3,2,3,1], [2,2,5,2,3,6]))