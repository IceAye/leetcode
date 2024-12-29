// ❓ DESCRIPTION:
// You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd
// digits or both even digits).  Return the largest possible value of num after any number of swaps.
//
// ✅ SOLUTION (runtime 100%):
const largestInteger = function (num) {
    let digits = Array.from(num.toString() , Number);
    for (let i = 0; i < digits.length - 1; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            if (digits[i] % 2 === digits[j] % 2) {
                if (digits[i] < digits[j]) {
                    [digits[i] , digits[j]] = [digits[j] , digits[i]];
                }
            }
        }
    }
    return Number(digits.join(""));
};

// 📌 TESTCASE:
console.log(largestInteger(1234)); // 3412
console.log(largestInteger(65875)); // 87655
console.log(largestInteger(247)); // 427