let findIntersectionValues = function(nums1, nums2) {
    let answer1 = nums1.filter(item => nums2.includes(item)).length
    let answer2 = nums2.filter(item => nums1.includes(item)).length
    return [answer1, answer2]
}