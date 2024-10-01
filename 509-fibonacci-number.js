// ❓ DESCRIPTION:
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
//
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).
//
// ✅ SOLUTION:
let fib = function (n) {
    return n <= 1 ? n : fib(n - 2) + fib(n - 1);
};

// 📌 TESTCASE:
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));