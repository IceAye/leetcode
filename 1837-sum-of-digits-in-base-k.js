// ❓ DESCRIPTION:
// Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.
//
// After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.
//
// ✅ SOLUTION:
let sumBase = function (n, k) {
    return Array.from(n.toString(k).split(""), Number).reduce(
        (sum, current) => sum + current,
    );
};

console.log(sumBase(34, 6));
console.log(sumBase(10, 10));
