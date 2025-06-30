// ❓ DESCRIPTION:
// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.
// 📅 (daily question 2025 June< 30th):
//
// ✅ SOLUTION (96.73% runtime):
const findLHS = function(nums) {
    const freq = new Map();
    let maxLength = 0;

    for (const num of nums) {
        freq.set(num, freq.get(num) + 1 || 1)
    }

    for (const key of freq.keys()) {
        if (freq.get(key + 1)) {
            maxLength = Math.max(maxLength, freq.get(key) + freq.get(key + 1));
        }
    }

    return maxLength;
};

// 📌 TESTCASE:
console.log(findLHS([1,3,2,2,5,2,3,7])) // 5
console.log(findLHS([1,2,3,4])) // 2
console.log(findLHS([1,1,1,1])) // 0