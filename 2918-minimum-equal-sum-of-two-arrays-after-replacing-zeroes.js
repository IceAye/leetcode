// ❓ DESCRIPTION:
// You are given two arrays nums1 and nums2 consisting of positive integers.
// You have to replace all the 0's in both arrays with strictly positive integers such that the sum of elements of both arrays becomes equal.
// Return the minimum equal sum you can obtain, or -1 if it is impossible.
// 📅 (daily question 2025, May 10th)
//
// ✅ SOLUTION:
const minSum = function(nums1, nums2) {

    function mapped (array) {
        let sum = 0;
        let zeroCount = 0;
        for (const num of array) {
            num === 0 ? zeroCount++ : sum += num;
        }
        let total = sum + zeroCount;
        return { zeroCount, total };
    }

    let counts1 = mapped(nums1);
    let counts2 = mapped(nums2);

    if ((counts1.total > counts2.total && counts2.zeroCount === 0) || (counts2.total > counts1.total && counts1.zeroCount === 0)) return -1;

    return (counts1.total > counts2.total) ? counts1.total : counts2.total;
};

// 📌 TESTCASE:
console.log(minSum([3,2,0,1,0], [6,5,0])) // 12
console.log(minSum([2,0,2,0], [1,4])) // -1
console.log(minSum([8,13,15,18,0,18,0,0,5,20,12,27,3,14,22,0], [29,1,6,0,10,24,27,17,14,13,2,19,2,11])) // 179