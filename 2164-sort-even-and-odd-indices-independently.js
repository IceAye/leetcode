// ❓ DESCRIPTION:
// You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:
//
// Sort the values at odd indices of nums in non-increasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
// Sort the values at even indices of nums in non-decreasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
// Return the array formed after rearranging the values of nums.
//
// ✅ SOLUTION:
const sortEvenOdd = function (nums) {
    let odds = [];
    let evens = [];
    for (let i = 0; i < nums.length; i++) {
        i % 2 === 0 ? evens.push(nums[i]) : odds.push(nums[i]);
    }
    odds.sort((a, b) => b - a);
    evens.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < odds.length; i++) {
        result.push(evens[i], odds[i]);
    }
    if (evens.length > odds.length) result.push(evens.at(-1));
    return result;
};

// 📌 TESTCASE:
console.log(sortEvenOdd([4, 1, 2, 3])); // [2,3,4,1]
console.log(sortEvenOdd([2, 1])); // [2,1]
console.log(sortEvenOdd([4, 1, 2, 3, 10])); // [2,3,4,1,10]
console.log(
    sortEvenOdd([4, 1, 2, 3, 10, 34, 55, 75, 23, 12, 65, 12, 1, 5, 3, 2]),
); // [2,3,4,1,10]