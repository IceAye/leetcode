let minCostToMoveChips = function(position) {
    let even = 0;
    let odd = 0;
    position.map(item => item % 2 === 0 ? even++ : odd++)
    return Math.min(even, odd)
};

console.log(minCostToMoveChips([1,2,3]));
console.log(minCostToMoveChips([2,2,2,3,3]));
console.log(minCostToMoveChips([1,1000000000]));
console.log(minCostToMoveChips([2,3,3]));