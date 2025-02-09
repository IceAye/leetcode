const maximumDifference = function (nums) {
    let min = nums[0];
    let diff = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        } else {
            let temp = nums[i] - min;
            diff = Math.max(diff, temp);
        }
    }
    return diff || -1;
};

console.log(maximumDifference( [7,1,5,4])) // 4
console.log(maximumDifference([9,4,3,2])) // -1
console.log(maximumDifference([1,5,2,10])) // 9