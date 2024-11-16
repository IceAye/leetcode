// ❓ DESCRIPTION:
// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
//
// ✅ SOLUTION (runtime 100%):
const threeConsecutiveOdds = function(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) return true;
    }
    return false;
};

// 📌 TESTCASE:
console.log(threeConsecutiveOdds([2,6,4,1])) // false
console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12])) // true