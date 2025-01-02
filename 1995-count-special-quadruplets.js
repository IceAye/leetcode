const countQuadruplets = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = 1; j < nums.length - 2; j++ ) {
            for (let k = 2; k < nums.length - 1; k++) {
                for (let l = 3; l < nums.length; l++) {
                    if (i < j && j < k && k < l && (nums[i] + nums[j] + nums[k] === nums[l])) count++
                }
            }
        }
    }
    return count;
};

console.log(countQuadruplets([1,2,3,6])) // 1
console.log(countQuadruplets([3,3,6,4,5])) // 0
console.log(countQuadruplets([1,1,1,3,5])) // 4