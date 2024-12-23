// ❓ DESCRIPTION:
// Given an array of integers nums, you start with an initial positive value startValue.
//
// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
//
// Return the minimum positive value of startValue such that the step by step sum is never less than 1.
//
// ✅ SOLUTION (runtime 100%):
const minStartValue = function (nums) {
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

// 📌 TESTCASE:
console.log(minStartValue([-3 , 2 , -3 , 4 , 2])) // 5
console.log(minStartValue([1 , 2])) // 1
console.log(minStartValue([1 , -2 , -3])) // 5
