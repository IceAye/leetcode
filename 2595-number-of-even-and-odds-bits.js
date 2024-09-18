// ❓ DESCRIPTION:
// You are given a positive integer n.
// Let even denote the number of even indices in the binary representation of n with value 1.
// Let odd denote the number of odd indices in the binary representation of n with value 1.
// Note that bits are indexed from right to left in the binary representation of a number.
// Return the array [even, odd].
//
// ✅ SOLUTION (runtime 91.51%, memory 95.28%):
let evenOddBit = function (n) {
    let count = [0, 0];
    let array = [...n.toString(2)].reverse();
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0 && array[i] === "1") count[0]++;
        if (i % 2 === 1 && array[i] === "1") count[1]++;
    }
    return count;
};

console.log(evenOddBit(50));
console.log(evenOddBit(2));
