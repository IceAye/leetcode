// ❓ DESCRIPTION:
// We are given a list nums of integers representing a list compressed with run-length encoding.
// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.
// Return the decompressed list.
//
// ✅ SOLUTION (91.62% runtime, 88.62% memory):
const decompressRLElist = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length - 1; i += 2) {
        let seq = new Array(nums[i]).fill(nums[i + 1]);
        result.push(...seq);
    }
    return result;
};

// 📌 TESTCASE:
console.log(decompressRLElist([1,2,3,4])) // [2,4,4,4]
console.log(decompressRLElist([1,1,2,3])) // [1,3,3]