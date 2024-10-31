// ❓ DESCRIPTION:
// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.
// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.
//
// ✅ SOLUTION:
let canMakeArithmeticProgression = function(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr.length - 2; i++) {
        if (arr[i] - arr[i + 1] !== arr[i + 1] - arr[i + 2]) return false;
    }
    return true;
};

// 📌 TESTCASE:
console.log(canMakeArithmeticProgression([3,5,1])) // true
console.log(canMakeArithmeticProgression([1,2,4])) // false

