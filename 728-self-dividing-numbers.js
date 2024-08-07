// ❓ DESCRIPTION:
// A self-dividing number is a number that is divisible by every digit it contains.
//
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.
//
// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].
//
// ✅ SOLUTION:
let selfDividingNumbers = function ( left , right ) {
    let array = [];
    let isDivisible = false;
    for (let i = left; i <= right; i++) {
        let digits = Array.from(i.toString().split("") , Number);

        for (let j = 0; j < digits.length; j++) {
            if (i % digits[j] === 0 && digits[j] !== 0) {
                isDivisible = true;
            } else {
                isDivisible = false;
                break;
            }
        }
        if (isDivisible) array.push(i);
    }
    return array;
};

console.log(selfDividingNumbers(1 , 22));
console.log(selfDividingNumbers(47 , 85));