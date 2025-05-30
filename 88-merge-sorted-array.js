const merge = function(nums1, m, nums2, n) {
    let l = m - 1;
    let r = n - 1;
    let i = nums1.length - 1
    while (r >=0) {
        if (l >= 0 && nums1[l] > nums2[r]) {
            nums1[i] = nums1[l];
            l--;
        } else {
            nums1[i] = nums2[r];
            r--;
        }
        i--;
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)) // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)) // [1]
console.log(merge([0], 0, [1], 1)) // [1]
