// ❓ DESCRIPTION:
// A bit flip of a number x is choosing a bit in the binary representation of x and flipping it from either 0 to 1 or 1 to 0.
// For example, for x = 7, the binary representation is 111 and we may choose any bit (including any leading zeros not shown) and flip it. We can flip the first bit from the right to get 110, flip the second bit from the right to get 101, flip the fifth bit from the right (a leading zero) to get 10111, etc.
// Given two integers start and goal, return the minimum number of bit flips to convert start to goal.
//
// ✅ SOLUTION:
const minBitFlips = function(start, goal) {
    return (start ^ goal).toString(2).replace(/0/g, "").length;
}

// 📌 TESTCASE:
console.log(minBitFlips(10, 7)) // 3
console.log(minBitFlips(3, 4)) // 3
console.log(minBitFlips(35, 22)) // 4