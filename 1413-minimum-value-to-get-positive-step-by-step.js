const minStartValue = function(nums) {
    let start = 1;
    let sum = start;
    let i = 0
    while (sum > 0) {
        sum += nums[i];
        i++;
        if (sum <= 0) {
            start++;
            sum = start;
            i = 0;
        }
    }
    return start;
};

console.log(minStartValue([-3,2,-3,4,2])) // 5
console.log(minStartValue([1,2])) // 1
console.log(minStartValue([1,-2,-3])) // 5
