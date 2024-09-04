let relativeSortArray = function (arr1, arr2) {
    let start = arr1.sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b));
    let end = start.splice(0, start.indexOf(arr2[0])).sort((a, b) => a - b);
    return [...start, ...end];
};

console.log(
    relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]),
);
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));
