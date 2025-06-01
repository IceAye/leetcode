// ❓ DESCRIPTION:
// You are given two positive integers n and limit.
//
// Return the total number of ways to distribute n candies among 3 children such that no child gets more than limit candies.
// 📅 (daily question 2025 June, 1st):
//
// ✅ SOLUTION:
const distributeCandies = function(n, limit) {
    let result = 0;

    for (let i = 0; i <= Math.min(n, limit); i++) {
        result += Math.max(Math.min(limit, n - i) - Math.max(0, n - i - limit) + 1, 0);
    }
    return result;
};

// 📌 TESTCASE:
console.log(distributeCandies(5, 2)) // 3
console.log(distributeCandies(3, 3)) // 10
