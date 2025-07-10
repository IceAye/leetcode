const sumCounts = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            const setSize = new Set(nums.slice(i, nums.length - j)).size;
            sum += setSize**2;
        }
    }
    return sum;
};

console.log(sumCounts([1,2,1])) // 15
console.log(sumCounts([1,1])) // 3