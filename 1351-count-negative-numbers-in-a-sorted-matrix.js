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