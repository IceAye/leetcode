const findChampion = function (n, edges) {
    let edge = edges.map((edge) => edge[1]);
    let team = [];
    for (let i = 0; i < n; ++i) {
        if (!edge.includes(i)) team.push(i);
        if (team.length > 1) return -1;
    }
    return team[0];
};

console.log(findChampion( 3, [[0,1],[1,2]])) // 0
console.log(findChampion(4,[[0,2],[1,3],[1,2]])) // -1