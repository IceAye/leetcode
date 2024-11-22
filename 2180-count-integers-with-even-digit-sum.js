// ❓ DESCRIPTION:
// Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.
// The digit sum of a positive integer is the sum of all its digits.
//
// ✅ SOLUTION:
const countEven = function(num) {
    let count = 0;
    let i = 1;
    while (i <= num) {
        if (i < 10) {
            if (i % 2 === 0) count++;
        } else {
            let digits = Array.from(i.toString(), Number)
            if (digits.reduce((acc, curr) => acc + curr, 0) % 2 === 0) count++;
        }
        i++;
    }
    return count;
};

// 📌 TESTCASE:
console.log(countEven(4)) // 2
console.log(countEven(30)) // 14