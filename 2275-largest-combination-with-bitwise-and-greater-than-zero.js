// ❓ DESCRIPTION:
// The bitwise AND of an array nums is the bitwise AND of all integers in nums.
// For example, for nums = [1, 5, 3], the bitwise AND is equal to 1 & 5 & 3 = 1.
// Also, for nums = [7], the bitwise AND is 7.
// You are given an array of positive integers candidates. Evaluate the bitwise AND of every combination of numbers of candidates. Each number in candidates may only be used once in each combination.
// Return the size of the largest combination of candidates with a bitwise AND greater than 0.
//
// ✅ SOLUTION 1:

const largestCombination = function(candidates) {
    let result = [];
    let binaries = candidates.map(item => item.toString(2));
    for (let i = 1; i <= 24; i++) {
        let count = 0;
        for (let j = 0; j < binaries.length; j++) {
            if (binaries[j].at(-i) === "1") count++;
        }
        result.push(count);
    }
    return Math.max(...result);
};

// ✅ SOLUTION 2:
const largestCombination = function(candidates) {
    let result = [];
    for (let i = 1; i <= 24; i++) {
        let count = 0;
        for (let j = 0; j < candidates.length; j++) {
            if (candidates[j] & (1 << i)) count++;
        }
        result.push(count);
    }
    return Math.max(...result);
};

// 📌 TESTCASE:
console.log(largestCombination([16,17,71,62,12,24,14])) // 4
console.log(largestCombination([8,8])) // 2
