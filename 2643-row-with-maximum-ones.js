let rowAndMaximumOnes = function (mat) {
    let array = [];
    for (let i = 0; i < mat.length; i++) {
        array.push(mat[i].reduce((sum, current) => sum + current));
    }
    let max = Math.max(...array);
    return [array.indexOf(max), max];
};

console.log(
    rowAndMaximumOnes([
        [0, 1],
        [1, 0],
    ]),
);
console.log(
    rowAndMaximumOnes([
        [0, 0, 0],
        [0, 1, 1],
    ]),
);
console.log(
    rowAndMaximumOnes([
        [0, 0],
        [1, 1],
        [0, 0],
    ]),
);
