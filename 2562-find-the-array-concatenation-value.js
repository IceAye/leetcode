let findTheArrayConcVal = function (nums) {
    let middle = Math.floor(nums.length / 2)
    let result = 0
    for (let i = 0; i < middle; i++){
        result += +(String(nums.at(i)) + String(nums.at(-1 - i)))
    }
    return nums.length % 2 === 1 ? result += nums[middle] : result;
};


console.log(findTheArrayConcVal([7 , 52 , 2 , 4])) // 596
console.log(findTheArrayConcVal([5 , 14 , 13 , 8 , 12])) // 673
