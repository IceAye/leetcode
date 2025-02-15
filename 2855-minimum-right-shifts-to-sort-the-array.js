// ❓ DESCRIPTION:
// You are given a 0-indexed array nums of length n containing distinct positive integers. Return the minimum number of right shifts required to sort nums and -1 if this is not possible.
// A right shift is defined as shifting the element at index i to index (i + 1) % n, for all indices.
//
// ✅ SOLUTION:
const minimumRightShifts = function (nums) {
    let start = nums.findIndex((num, ind) => num < nums[ind - 1]);
    if (start === -1) return 0;
    if (nums[nums.length - 1] < nums[0]) {
        let count = 1;
        for (let i = start; i < nums.length - 1; i++) {
            if (nums[i] < nums[i + 1]) {
                count++;
            } else return -1;
        }
        return count;
    }
    return -1;
};

// 📌 TESTCASE:
console.log(minimumRightShifts([3, 4, 5, 1, 2])); // 2
console.log(minimumRightShifts([1, 3, 5])); // 0
console.log(minimumRightShifts([2, 1, 4])); // -1
console.log(minimumRightShifts([92, 84, 37, 19, 16, 85, 20, 79, 25, 89])); // -1
console.log(minimumRightShifts([29, 30, 88, 28, 62])); // -1
console.log(minimumRightShifts([1, 2, 5, 4])); // -1