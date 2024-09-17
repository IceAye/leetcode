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
