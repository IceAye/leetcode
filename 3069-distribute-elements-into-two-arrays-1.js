let resultArray = function (nums) {
    let arr1 = [nums[0]];
    let arr2 = [nums[1]];
    for (let i = 2; i < nums.length; i++) {
        arr1.at(-1) > arr2.at(-1) ? arr1.push(nums[i]) : arr2.push(nums[i]);
    }
    return [...arr1, ...arr2];
};

console.log(resultArray([2,1,3]));
console.log(resultArray([5,4,3,8]));
