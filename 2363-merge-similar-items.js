// ❓ DESCRIPTION:
// You are given two 2D integer arrays, items1 and items2, representing two sets of items. Each array items has the following properties:
//
// items[i] = [valuei, weighti] where valuei represents the value and weighti represents the weight of the ith item.
// The value of each item in items is unique.
// Return a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of weights of all items with value valuei.
//
// Note: ret should be returned in ascending order by value.
//
// ✅ SOLUTION:
let mergeSimilarItems = function (items1, items2) {
    let ret = new Map();

    for (const item of items1) {
        ret.set(item[0], item[1]);
    }
    for (const item of items2) {
        ret.set(item[0], (ret.get(item[0]) + item[1]) || item[1])
    }

    return [...ret].sort((a, b) => a[0] - b[0]);
};

console.log(
    mergeSimilarItems(
        [
            [1, 1],
            [4, 5],
            [3, 8],
        ],
        [
            [3, 1],
            [1, 5],
        ],
    ),
);
console.log(
    mergeSimilarItems(
        [
            [1, 1],
            [3, 2],
            [2, 3],
        ],
        [
            [2, 1],
            [3, 2],
            [1, 3],
        ],
    ),
);
console.log(
    mergeSimilarItems(
        [
            [1, 3],
            [2, 2],
        ],
        [
            [7, 1],
            [2, 2],
            [1, 4],
        ],
    ),
);
