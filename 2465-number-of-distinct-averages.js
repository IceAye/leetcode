// ❓ DESCRIPTION:
// You are given a 0-indexed integer array nums of even length.
//
// As long as nums is not empty, you must repetitively:
//
// Find the minimum number in nums and remove it.
// Find the maximum number in nums and remove it.
// Calculate the average of the two removed numbers.
// The average of two numbers a and b is (a + b) / 2.
//
// For example, the average of 2 and 3 is (2 + 3) / 2 = 2.5.
// Return the number of distinct averages calculated using the above process.
//
// Note that when there is a tie for a minimum or maximum number, any can be removed
//
// ✅ SOLUTION:
const distinctAverages = function(nums) {
    let averages = new Set();
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length/2; i++) {
        let average = (nums[i] + nums[nums.length - 1 - i]) / 2;
        averages.add(average);
    }
    return averages.size;
};

// 📌 TESTCASE:
console.log(distinctAverages([4,1,4,0,3,5])) // 2
console.log(distinctAverages([1,100])) // 1