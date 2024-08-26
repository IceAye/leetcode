let findMissingAndRepeatedValues = function (grid) {
    let max = Math.pow(grid.length, 2);
    let array = grid.flat();

    let currentSum = array.reduce((sum, item) => sum + item);

    let initialSum = 0;
    for (let i = 1; i <= max; i++) {
        initialSum += i;
    }

    let a = +array.filter((item, index, numbers) => {
        return numbers.indexOf(item) !== index;
    });

    let b = initialSum - currentSum + a;

    return [a, b];
};

console.log(
    findMissingAndRepeatedValues([
        [1, 3],
        [2, 2],
    ]),
);
console.log(
    findMissingAndRepeatedValues([
        [9, 1, 7],
        [8, 9, 2],
        [3, 4, 6],
    ]),
);
