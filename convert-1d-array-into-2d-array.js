let construct2DArray = function (original, m, n) {
    let array = [];
    for (let i = 0; i < original.length; i += n) {
        array.push(original.slice(i, i+n))
    }
    return m * n === original.length ? array : [];
};

console.log(construct2DArray([1, 2, 3, 4], 2, 2));
console.log(construct2DArray([1, 2, 3], 1, 3));
console.log(construct2DArray([1,2], 1, 1));
console.log(construct2DArray([3], 1, 2));

