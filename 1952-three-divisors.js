// ❓ DESCRIPTION:
// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.
// An integer m is a divisor of n if there exists an integer k such that n = k * m.
//
// ✅ SOLUTION (100% runtime):
const isThree = function (n) {
    let potentialPrime = Math.sqrt(n);
    if (!Number.isInteger(potentialPrime) || n === 1) {
        return false;
    } else {
        for (let i = 2; i < potentialPrime; i++) {
            if (potentialPrime % i === 0) return false;
        }
        return true;
    }
};

// 📌 TESTCASE:
console.log(isThree(2)); // false
console.log(isThree(4)); // true
console.log(isThree(1)); // false