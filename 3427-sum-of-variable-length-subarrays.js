// ❓ DESCRIPTION:
// You are given an integer array nums of size n. For each index i where 0 <= i < n, define a subarray nums[start ... i] where start = max(0, i - nums[i]).
//
// Return the total sum of all elements from the subarray defined for each index in the array.
//
// ✅ SOLUTION:
const subarraySum = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        let start = Math.max(0, i - nums[i])
        result += nums.slice(start, i + 1).reduce((acc, curr) => acc + curr, 0);
    }
    return result;
};

// 📌 TESTCASE:
console.log(subarraySum([2,3,1])) // 11
console.log(subarraySum([3,1,1,2])) // 13