// ❓ DESCRIPTION:
// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
//
// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.
//
// ✅ SOLUTION:
let findDifference = function ( nums1 , nums2 ) {
    let first = new Set(nums1);
    let second = new Set(nums2);
    for (const num of first) {
        if (second.has(num)) {
            first.delete(num);
            second.delete(num);
        }
    }
    return [Array.from(first) , Array.from(second)];
};

console.log(findDifference([1 , 2 , 3] , [2 , 4 , 6]));
console.log(findDifference([1 , 2 , 3 , 3] , [1 , 1 , 2 , 2]));
console.log(findDifference([-68 , -80 , -19 , -94 , 82 , 21 , -43] , [-63]));