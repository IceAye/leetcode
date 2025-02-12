const maximumSum = function(nums) {
    function summarizeDigits(number) {
        let  digitSum = 0;
        while (number > 0) {
            digitSum += number % 10;
            number = Math.floor(number / 10);
        }
        return digitSum
    }

    let results = new Map()

    for (let i = 0; i < nums.length; i++) {
        let digit = summarizeDigits(nums[i])
        if (results.has(digit)) {
            results.get(digit).push(nums[i])
        } else {
            results.set(digit, [nums[i]])
        }
    }

    let maxSum = -1;

    for (const value of results.values()) {
        if (value.length > 1) {
            value.sort((a, b) => b - a);
            let currentSum = value[0] + value[1];
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
};

console.log(maximumSum([18,43,36,13,7])) // 54
console.log(maximumSum([10,12,19,14])) // -1
console.log(maximumSum([2,1,5,5,2,4])) // 10