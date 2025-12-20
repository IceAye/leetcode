// ❓ DESCRIPTION:
// You are given an array of n strings strs, all of the same length.
// The strings can be arranged such that there is one on each line, making a grid.
//
// For example, strs = ["abc", "bce", "cae"] can be arranged as follows:
// abc
// bce
// cae
// You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted, while column 1 ('b', 'c', 'a') is not, so you would delete column 1.
//
// Return the number of columns that you will delete.
// 📅 (daily question 2025 December, 20th)

// ❗ CONSTRAINTS:
// n == strs.length
// 1 <= n <= 100
// 1 <= strs[i].length <= 1000
// strs[i] consists of lowercase English letters.

// ✅ SOLUTION (:
/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = function(strs) {
    const deleted = new Set();

    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < strs[0].length; j++) {
            if (!deleted.has(j)) {
                if (strs[i][j] < strs[i - 1][j]) {
                    deleted.add(j)
                }
            }
        }
    }

    return deleted.size;
};

// 📌 TESTCASE:
console.log(minDeletionSize(["cba","daf","ghi"])) // 1
console.log(minDeletionSize(["a","b"])) // 0
console.log(minDeletionSize(["zyx","wvu","tsr"])) // 3