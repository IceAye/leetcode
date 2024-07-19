// ❓ DESCRIPTION:
// You are given a positive integer num consisting only of digits 6 and 9.
// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
//
// ✅ SOLUTION:
let maximum69Number  = function(num) {
    return +String(num).replace(/6/, "9")
}

console.log(maximum69Number(9669))
console.log(maximum69Number(9996))