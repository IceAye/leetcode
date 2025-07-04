const arrayPairSum = function(nums) {
    return nums.sort((a, b) => a - b).reduce((acc, curr, ind) => acc + (ind % 2 === 0 ? curr : 0), 0);
};

console.log(arrayPairSum([1,4,3,2])) // 4
console.log(arrayPairSum([6,2,6,5,1,2])) // 9