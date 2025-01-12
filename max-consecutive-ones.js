const findMaxConsecutiveOnes = function(nums) {
    return Math.max(...nums.join("").split("0").map(num => num.length));
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])) // 3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])) // 2
console.log(findMaxConsecutiveOnes([1,0,1,1,0,0,0,1])) // 2
