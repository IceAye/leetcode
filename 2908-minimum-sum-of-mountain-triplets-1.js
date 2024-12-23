const minimumSum = function(nums) {
    let min = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j =  i + 1; j < nums.length - 1; j++ ) {
            for (let k = i + 2; k < nums.length; k++) {
                if (i < j && j < k && nums[i] < nums[j] && nums[j] > nums[k]) {
                    let sum = nums[i] + nums[j] + nums[k];
                    min = Math.min(min, sum)
                }
            }
        }
    }
    return min !== Infinity ? min : -1;
};

console.log(minimumSum([8,6,1,5,3])) // 9
console.log(minimumSum([5,4,8,7,10,2])) // 13
console.log(minimumSum([6,5,4,3,4,5])) // -1