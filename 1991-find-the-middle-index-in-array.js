const findMiddleIndex = function(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((acc, curr) => acc + curr);
    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        if (leftSum === rightSum) return i;
        leftSum += nums[i];
    }
    return -1;
};

console.log(findMiddleIndex([2,3,-1,8,4])) // 3
console.log(findMiddleIndex([1,-1,4])) // 2
console.log(findMiddleIndex([2,5])) // -1