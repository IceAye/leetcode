// ❓ DESCRIPTION:
// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
//
// After doing so, return the array.
//
// ✅ SOLUTION (beat 100% of other submissions' runtime):
let replaceElements = function (arr) {
    let max = -1;
    let array = arr.reverse();
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(max)
        if (array[i] > max) {
            max = array[i]
        }
    }
    return result.reverse();
};

// ❓ TESTCASE:
console.log(replaceElements([17, 18, 5, 4, 6, 1]));
console.log(replaceElements([400]));
