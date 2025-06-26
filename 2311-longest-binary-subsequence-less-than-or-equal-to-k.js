// ❓ DESCRIPTION:
// You are given a binary string s and a positive integer k.
// Return the length of the longest subsequence of s that makes up a binary number less than or equal to k.
//
// Note:
// The subsequence can contain leading zeroes.
// The empty string is considered to be equal to 0.
// A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.
// 📅 (daily question 2025, June 26th)
//
// ✅ SOLUTION:
const longestSubsequence = function(s, k) {
    while (parseInt(s, 2) > k) {
        s = s.replace(/1/, '');
    }
    return s.length;
};

// 📌 TESTCASE:
console.log(longestSubsequence("1001010",  5)) // 5
console.log(longestSubsequence("00101001",  1)) // 6