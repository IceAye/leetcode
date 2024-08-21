// SOLUTION 1 (simple iteration):
let countNegatives = function (grid) {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] < 0) count++;
        }
    }

    return count;
};

// SOLUTION 2 (filter):
let countNegatives = function (grid) {
    return grid.flat().filter(item => item < 0).length;
};

// SOLUTION 3 (binary search), the most efficient:
let countNegatives = function (grid) {
    let count = 0;
    let length = grid[0].length;

    for (const row of grid) {
        let start = 0;
        let end = length - 1;

        while (start <= end) {
            let middle = Math.floor((start + end) / 2)

            if (row[middle] >= 0) {
                start = middle + 1
            } else end = middle - 1
        }

        count += length - start;
    }

    return count;
};

console.log(
    countNegatives([
        [4, 3, 2, -1],
        [3, 2, 1, -1],
        [1, 1, -1, -2],
        [-1, -1, -2, -3],
    ]),
);
console.log(
    countNegatives([
        [3, 2],
        [1, 0],
    ]),
);