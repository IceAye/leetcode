const mostFrequent = function(nums, key) {
    const map = new Map();
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === key) {
            map.set(nums[i + 1], map.get(nums[i + 1]) + 1 || 1)
        }
    }
    return [...map.keys()].filter(key => map.get(key) === Math.max(...[...map.values()]))[0]
};

console.log(mostFrequent([1,100,200,1,100], 1)) // 100
console.log(mostFrequent([2,2,2,2,3], 2)) // 2