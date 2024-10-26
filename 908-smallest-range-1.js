let smallestRangeI = function(nums, k) {
    let result = (Math.max(...nums) - k) - (Math.min(...nums) + k);
    return result >= 0 ? result : 0;
};

console.log(smallestRangeI([1], 0)) // 0
console.log(smallestRangeI([0,10], 2)) // 6
console.log(smallestRangeI([1,3,6], 3)) // 0
