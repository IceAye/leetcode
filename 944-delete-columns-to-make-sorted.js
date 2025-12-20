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

console.log(minDeletionSize(["cba","daf","ghi"])) // 1
console.log(minDeletionSize(["a","b"])) // 0
console.log(minDeletionSize(["zyx","wvu","tsr"])) // 3