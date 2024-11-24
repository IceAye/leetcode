// ❓ DESCRIPTION:
// Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).
// A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].
// If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.
// Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.
//
// ✅ SOLUTION:
const findMiddleIndex = function(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((acc, curr) => acc + curr);
    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        if (leftSum === rightSum) return i;
        leftSum += nums[i];
    }
    return -1;
};

// 📌 TESTCASE:
console.log(findMiddleIndex([2,3,-1,8,4])) // 3
console.log(findMiddleIndex([1,-1,4])) // 2
console.log(findMiddleIndex([2,5])) // -1