// ❓ DESCRIPTION:
// Reversing an integer means to reverse all its digits.
//
// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if
// reversed2 equals num. Otherwise return false.
//
// ✅ SOLUTION:
let isSameAfterReversals = function ( num ) {
    return num % 10 !== 0 || num === 0;
};

console.log(isSameAfterReversals(526));
console.log(isSameAfterReversals(1800));
console.log(isSameAfterReversals(0));
console.log(isSameAfterReversals(1000));