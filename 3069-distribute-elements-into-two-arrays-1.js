// ❓ DESCRIPTION:
// You are given a 1-indexed array of distinct integers nums of length n.
// You need to distribute all the elements of nums between two arrays arr1 and arr2 using n operations. In the first operation, append nums[1] to arr1. In the second operation, append nums[2] to arr2. Afterwards, in the ith operation:
// If the last element of arr1 is greater than the last element of arr2, append nums[i] to arr1. Otherwise, append nums[i] to arr2.
// The array result is formed by concatenating the arrays arr1 and arr2. For example, if arr1 == [1,2,3] and arr2 == [4,5,6], then result = [1,2,3,4,5,6].
// Return the array result.
//
// ✅ SOLUTION:
let resultArray = function (nums) {
    let arr1 = [nums[0]];
    let arr2 = [nums[1]];
    for (let i = 2; i < nums.length; i++) {
        arr1.at(-1) > arr2.at(-1) ? arr1.push(nums[i]) : arr2.push(nums[i]);
    }
    return [...arr1, ...arr2];
};

console.log(resultArray([2,1,3]));
console.log(resultArray([5,4,3,8]));
