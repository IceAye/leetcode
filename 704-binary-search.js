// ❓ DESCRIPTION:
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.
//
// ✅ SOLUTION 1 (100% runtime):
const search = function(nums, target) {
    let start= 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middleElement = Math.floor((start + end) / 2);
        if (target === nums[middleElement]) {
            return middleElement;
        } else if (target < nums[middleElement]) {
            end = middleElement - 1;
        } else if (target > nums[middleElement]) {
            start = middleElement + 1;
        }
    }
    return -1;
};

// ✅ SOLUTION 2 (100% runtime):
const search = function(nums, target) {
    return nums.indexOf(target)
};

// 📌 TESTCASE:
console.log(search([-1,0,3,5,9,12], 9)) // 4
console.log(search([-1,0,3,5,9,12], 2)) // -1