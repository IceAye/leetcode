// ❓ DESCRIPTION:
// We have n chips, where the position of the ith chip is position[i].
// We need to move all the chips to the same position. In one step, we can change the position of the ith chip from position[i] to:
// position[i] + 2 or position[i] - 2 with cost = 0.
// position[i] + 1 or position[i] - 1 with cost = 1.
// Return the minimum cost needed to move all the chips to the same position.
//
// ✅ SOLUTION 1:
let minCostToMoveChips = function(position) {
    let even = 0;
    let odd = 0;
    position.map(item => item % 2 === 0 ? even++ : odd++)
    return Math.min(even, odd)
};

// ✅ SOLUTION 2:
let minCostToMoveChips = function(position) {
    return Math.min(...position.reduce(
        (acc, current) => {
            current % 2 ? acc[1]++ : acc[0]++;
            return acc;
        },
        [0, 0],
    ))
};

console.log(minCostToMoveChips([1,2,3]));
console.log(minCostToMoveChips([2,2,2,3,3]));
console.log(minCostToMoveChips([1,1000000000]));
console.log(minCostToMoveChips([2,3,3]));