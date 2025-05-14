const findCenter = function (edges) {
    return edges[0][0] === edges[1][0]
        ? edges[0][0]
        : edges[0][1] === edges[1][1]
            ? edges[0][1]
            : edges[0][0] === edges[1][1]
                ? edges[0][0]
                : edges[0][1];
};

console.log(findCenter([[1,2],[2,3],[4,2]])) // 2
console.log(findCenter([[1,2],[5,1],[1,3],[1,4]])) // 1