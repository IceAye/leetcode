// ❓ DESCRIPTION:
// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.
// A row i is weaker than a row j if one of the following is true:
// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.
//
// ✅ SOLUTION (runtime 99.18%, memory 72.24%):
let kWeakestRows = function (mat, k) {
    let result = [];
    let sorted = mat
        .map((item, index) => [item.reduce((sum, current) => sum + current), index])
        .toSorted((a, b) => a[0] - b[0]);
    for (let i = 0; i < k; i++) {
        result.push(sorted[i][1]);
    }
    return result;
};

console.log(
    kWeakestRows(
        [
            [1, 1, 0, 0, 0],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [1, 1, 1, 1, 1],
        ],
        3,
    ),
);
console.log(
    kWeakestRows(
        [
            [1, 0, 0, 0],
            [1, 1, 1, 1],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
        ],
        2,
    ),
);
