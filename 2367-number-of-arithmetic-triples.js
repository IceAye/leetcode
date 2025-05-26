// ❓ DESCRIPTION:
// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:
// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.
//
// ✅ SOLUTION (81.91% runtime, 82.25% memory):
const arithmeticTriplets = function(nums, diff) {
    let count = 0;
    const set = new Set(nums);

    for (const num of set) {
        if (set.has(num + diff) && set.has(num + diff *2)) count++;
    }

    return count;
};

// 📌 TESTCASE:
console.log(arithmeticTriplets([0,1,4,6,7,10],  3)) // 2
console.log(arithmeticTriplets([4,5,6,7,8,9],  2)) // 2