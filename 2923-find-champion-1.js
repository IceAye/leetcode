let findChampion = function(grid) {
    for (const row of grid) {
        if (row.reduce((sum, current) => sum + current, 0) === (grid.length - 1)) return grid.indexOf(row)
    }
};

console.log(findChampion([[0,1],[0,0]]))
console.log(findChampion([[0,0,1],[1,0,1],[0,0,0]]))