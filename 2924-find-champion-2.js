// ❓ DESCRIPTION:
// There are n teams numbered from 0 to n - 1 in a tournament; each team is also a node in a DAG.
// You are given the integer n and a 0-indexed 2D integer array edges of length m representing the DAG, where edges[i] = [ui, vi] indicates that there is a directed edge from team ui to team vi in the graph.
// A directed edge from a to b in the graph means that team a is stronger than team b and team b is weaker than team a.
// Team a will be the champion of the tournament if there is no team b that is stronger than team a.
// Return the team that will be the champion of the tournament if there is a unique champion, otherwise, return -1.
// Notes
// A cycle is a series of nodes a1, a2, ..., an, an+1 such that node a1 is the same node as node an+1, the nodes a1, a2, ..., an are distinct, and there is a directed edge from the node ai to node ai+1 for every i in the range [1, n].
// A DAG is a directed graph that does not have any cycle.
//
// ✅ SOLUTION (runtime 100%):
const findChampion = function (n, edges) {
    let edge = edges.map((edge) => edge[1]);
    let team = [];
    for (let i = 0; i < n; ++i) {
        if (!edge.includes(i)) team.push(i);
        if (team.length > 1) return -1;
    }
    return team[0];
};

// 📌 TESTCASE:
console.log(findChampion( 3, [[0,1],[1,2]])) // 0
console.log(findChampion(4,[[0,2],[1,3],[1,2]])) // -1