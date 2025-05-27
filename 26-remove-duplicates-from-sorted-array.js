// ❓ DESCRIPTION:
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
//
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
//
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
//
// ✅ SOLUTION 1 (100% runtime, 14.06% memory):
const removeDuplicates = function (nums) {
    let l = 0, r = 1;
    while (r < nums.length) {
        while (nums[l] === nums[r] ) {
            r++;
        }
        l++;
        nums[l] = nums[r];
        if (nums[l] === undefined) break
    }
    return l || nums.length;
};

// ✅ SOLUTION 2:
const removeDuplicates = function (nums) {
    let l = 1;
    for (let r = 1; r < nums.length; r++) {
        if (nums[l - 1] !== nums[r]) {
            nums[l] = nums[r];
            l++;
        }
    }
    return l;
};

// ❓ TESTCASE:
console.log(removeDuplicates([1,1,2])) // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // 5
console.log(removeDuplicates([1])) // 1
console.log(removeDuplicates([1,2])) // 2
console.log(removeDuplicates([-1,0,0,0,0,3,3])) // 3