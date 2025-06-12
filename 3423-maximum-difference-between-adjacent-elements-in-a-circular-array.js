const maxAdjacentDistance = function(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        const diff = i === nums.length - 1 ? Math.abs(nums[i] - nums[0]) : Math.abs(nums[i] - nums[i + 1]);
        max = Math.max(max, diff);
    }
    return max;
};

const maxAdjacentDistance = function(nums) {
    return nums.reduce((max, curr, ind) => Math.max(max, Math.abs(curr - nums.at(ind - 1))), 0);
};


console.log(maxAdjacentDistance([1,2,4])) // 3
console.log(maxAdjacentDistance([-5,-10,-5])) // 5