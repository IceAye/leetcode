// ❓ DESCRIPTION:
// Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.
// Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.
//
// ✅ SOLUTION 1:
const averageValue = function (nums) {
    let array = [];
    for (const num of nums) {
        if (num % 2 === 0 && num % 3 === 0) {
            array.push(num);
        }
    }
    let n = array.length;
    if (n) {
        let sum = array.reduce((acc, curr) => acc + curr, 0);
        return Math.floor(sum / n);
    }
    return 0;
};

// ✅ SOLUTION 2:
const averageValue = function (nums) {
    let sum = 0;
    let count = 0;
    for (const num of nums) {
        if (num % 2 === 0 && num % 3 === 0) {
            sum += num;
            count++;
        }
    }
    return sum ? Math.floor(sum / count) : 0;
};

// 📌 TESTCASE:
console.log(averageValue([1, 3, 6, 10, 12, 15])); // 9
console.log(averageValue([1, 2, 4, 7, 10])); // 0
console.log(averageValue([43,9,75,76,25,96,46,85,19,29,88,2,5,24,60,26,76,24,96,82,97,97,72,35,21,77,82,30,94,55,76,94,51])); // 57