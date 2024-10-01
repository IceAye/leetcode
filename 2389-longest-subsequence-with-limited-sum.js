// ❓ DESCRIPTION:
// You are given an integer array nums of length n, and an integer array queries of length m.
// Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].
// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
//
// ✅ SOLUTION:
let answerQueries = function(nums, queries) {
    let answer = []
    nums.sort((a, b) => a - b);
    for (const query of queries) {
        let result = 0;
        let count = 0;
        for (let i = 0; i < query; i++) {
            result += nums[i];
            if (result <= query) {
                count++;
            } else break
        }
        answer.push(count);
    }
    return answer;
};

// 📌 TESTCASE:
console.log(answerQueries([4,5,2,1], [3,10,21]));
console.log(answerQueries([2,3,4,5], [1]));