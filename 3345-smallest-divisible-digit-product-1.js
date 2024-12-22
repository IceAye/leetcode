// ❓ DESCRIPTION:
// You are given two integers n and t. Return the smallest number greater than or equal to n such that the product of its digits is divisible by t.
//
// ✅ SOLUTION:
const smallestNumber = function(n, t) {
    for (let i = n; ; i++) {
        let number = Array.from(i.toString(), Number).reduce((acc, curr) => acc * curr);
        if (number % t === 0) return i;
    }
};

// 📌 TESTCASE:
console.log(smallestNumber(10, 2)) // 10
console.log(smallestNumber(15, 3)) // 16