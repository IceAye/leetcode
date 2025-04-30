// ❓ DESCRIPTION:
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).
//
// ✅ SOLUTION:

const findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = [];
    let left = 0;
    let right = 0;

    let leftLength = nums1.length;
    let rightLength = nums2.length;
    let sumLength = leftLength + rightLength;

    while (left < leftLength && right < rightLength) {
        if (nums1[left] <= nums2[right]) {
            mergedArray.push(nums1[left]);
            left++;
        }
        if (leftLength === left) {
            mergedArray.push(...nums2.slice(right))
            break
        }
        if (rightLength === right) {
            mergedArray.push(...nums1.slice(left))
            break
        }
        if (nums1[left] > nums2[right]) {
            mergedArray.push(nums2[right]);
            right++;
        }
    }

    return (sumLength) % 2 === 1 ? mergedArray[Math.floor(sumLength/2)] : (mergedArray[sumLength / 2] + mergedArray[sumLength / 2 - 1]) / 2;
};

// 📌 TESTCASE:
console.log(findMedianSortedArrays([1,3], [2])) // 2
console.log(findMedianSortedArrays([1,2], [3,4])) // 2.5
console.log(findMedianSortedArrays([1,1], [1,2])) // 1