// ❓ DESCRIPTION:
// You are given two 2D integer arrays nums1 and nums2.
//
// nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
// Each array contains unique ids and is sorted in ascending order by id.
//
// Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:
//
// Only ids that appear in at least one of the two arrays should be included in the resulting array.
// Each id should be included only once and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays then its value in that array is considered to be 0.
// Return the resulting array. The returned array must be sorted in ascending order by id.
//
// ✅ SOLUTION:
let mergeArrays = function (nums1, nums2) {
    let map = new Map(nums1);
    for (const num of nums2) {
        map.set(num[0], map.get(num[0]) + num[1] || num[1]);
    }
    return [...map].sort((a, b) => a[0] - b[0])
};

console.log(mergeArrays([[1,2],[2,3],[4,5]], [[1,4],[3,2],[4,1]]));
console.log(mergeArrays([[2,4],[3,6],[5,5]], [[1,3],[4,3]]));

