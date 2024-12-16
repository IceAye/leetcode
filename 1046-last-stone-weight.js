const lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a)
        if (stones[0] === stones[1]) {
            stones.splice(0, 2)
        } else {
            stones.splice(0, 2, stones[0] - stones[1])
        }
    }
    return stones[0] || 0;
};

console.log(lastStoneWeight([2,7,4,1,8,1])) // 1
console.log(lastStoneWeight([1])) // 1
console.log(lastStoneWeight([2,2])) // 0