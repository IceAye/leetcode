// ❓ DESCRIPTION:
// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if
// for all i <= j, nums[i] >= nums[j].  Given an integer array nums, return true if the given array is monotonic, or
// false otherwise.
//
// ✅ SOLUTION (95% runtime):
const isMonotonic = function (nums) {
    let start = nums.find((num) => nums[0] !== num);
    if (start === undefined) return true;
    if (nums[0] < start) {
        for (let i = 1; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) return false;
        }
    } else if (nums[0] > start) {
        for (let i = 1; i < nums.length - 1; i++) {
            if (nums[i] < nums[i + 1]) return false;
        }
    }
    return true;
};

// 📌 TESTCASE:
console.log(isMonotonic([1 , 2 , 2 , 3])); // true
console.log(isMonotonic([6 , 5 , 4 , 4])); // true
console.log(isMonotonic([1 , 3 , 2])); // false
console.log(isMonotonic([1 , 1 , 1])); // true