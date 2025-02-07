const distinctAverages = function(nums) {
    let averages = new Set();
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length/2; i++) {
        let average = (nums[i] + nums[nums.length - 1 - i]) / 2;
        averages.add(average);
    }
    return averages.size;
};

console.log(distinctAverages([4,1,4,0,3,5])) // 2
console.log(distinctAverages([1,100])) // 1