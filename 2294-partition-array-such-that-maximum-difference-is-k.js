const partitionArray = function (nums, k) {
    let count = 0;
    nums.sort((a, b) => a - b);
    let i = 0
    while ( i < nums.length) {
        let j = i;
        while (nums[j] - nums[i] <= k) j++;
        count++;
        i = j;
    }
    return count;
};

console.log(partitionArray([3,6,1,2,5], 2)) // 2
console.log(partitionArray([1,2,3], 1)) // 2
console.log(partitionArray([2,2,4,5], 0)) // 3