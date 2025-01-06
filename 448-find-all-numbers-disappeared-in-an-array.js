// ❓ DESCRIPTION:
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the
// range [1, n] that do not appear in nums.
//
// ✅ SOLUTION:
const findDisappearedNumbers = function (nums) {
    let n = nums.length;
    let result = [];
    let set = new Set(nums);
    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) result.push(i);
    }
    return result;
};

// 📌 TESTCASE:
console.log(findDisappearedNumbers([4 , 3 , 2 , 7 , 8 , 2 , 3 , 1])); // [5,6]
console.log(findDisappearedNumbers([1 , 1])); // [2]