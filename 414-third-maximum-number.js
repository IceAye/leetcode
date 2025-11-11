/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function(nums) {
    const sortedArr = [...new Set(nums)].sort((a, b) => b - a);
    return Number.isInteger(sortedArr[2]) ? sortedArr[2] : sortedArr[0];
};

console.log(thirdMax([3,2,1])) // 1
console.log(thirdMax([1,2])) // 2
console.log(thirdMax([2,2,3,1])) // 1
console.log(thirdMax([3,3,4,3,4,3,0,3,3])) // 4