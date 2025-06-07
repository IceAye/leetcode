// ❓ DESCRIPTION:
// Given a positive integer n, find the pivot integer x such that:
//
// The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
// Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.
//
// ✅ SOLUTION:
const pivotInteger = function(n) {
    const totalSum = n * (n + 1) / 2;

    let leftSum = 0;

    for (let x = 1; x <= n; x++) {
        leftSum += x;
        const rightSum = totalSum - leftSum + x;

        if (leftSum === rightSum) {
            return x;
        }
    }

    return -1;
};

// 📌 TESTCASE:
console.log(pivotInteger(8)) // 6
console.log(pivotInteger(1)) // 1
console.log(pivotInteger(4)) // -1