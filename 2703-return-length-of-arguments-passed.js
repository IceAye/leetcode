// ❓ DESCRIPTION:
// Write a function argumentsLength that returns the count of arguments passed to it.
//
// ✅ SOLUTION:
let argumentsLength = function(...args) {
    return [...args].length
};