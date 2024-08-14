// ❓ DESCRIPTION:
// You are given an m x n matrix grid consisting of positive integers.
//
// Perform the following operation until grid becomes empty.
// Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
// Add the maximum of deleted elements to the answer.
// Note that the number of columns decreases by one after each operation.
//
// Return the answer after performing the operations described above.
//
// ✅ SOLUTION:

let deleteGreatestValue = function (grid) {
    for (const row of grid) {
        row.sort((a, b) => a - b);
    }

    let sum = 0;

    for (let j = 0; j < grid[0].length; j++) {
        let max = 0;
        for (let i = 0; i < grid.length; i++) {
            max = Math.max(max, grid[i][j]);
        }
        sum += max;
    }
    return sum;
};

console.log(
    deleteGreatestValue([
        [1, 2, 4],
        [3, 3, 1],
    ]),
);

console.log(deleteGreatestValue([[10]]));