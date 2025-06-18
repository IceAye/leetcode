const divideArray = function(nums, k) {
    const result = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i += 3) {
        if (nums[i + 2] - nums[i] <= k) {
            result.push(nums.slice(i, i + 3));
        } else return [];
    }
    return result;
};

console.log(divideArray([1,3,4,8,7,9,3,5,1],  2)) // [[1,1,3],[3,4,5],[7,8,9]]
console.log(divideArray([2,4,2,2,5,2],  2)) // []
console.log(divideArray([4,2,9,8,2,12,7,12,10,5,8,5,5,7,9,2,5,11],  14)) // [[2,2,12],[4,8,5],[5,9,7],[7,8,5],[5,9,10],[11,12,2]]