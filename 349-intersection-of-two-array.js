// ❓ DESCRIPTION:
// Given two integer arrays nums1 and nums2, return an array of their
// intersection
// . Each element in the result must be unique and you may return the result in any order.
//
// ✅ SOLUTION:
let intersection = function ( nums1 , nums2 ) {
    let result = []
    let set1 = new Set(nums1);
    let set2 = new Set(nums2)
    for (const num of set1) {
        if (set2.has(num)) result.push(num)
    }
    return result
};

console.log(intersection([1 , 2 , 2 , 1] , nums2 = [2 , 2]))
console.log(intersection([4 , 9 , 5] , nums2 = [9 , 4 , 9 , 8 , 4]))
