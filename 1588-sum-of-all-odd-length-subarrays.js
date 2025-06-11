// ❓ DESCRIPTION:
// Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.
//
// A subarray is a contiguous subsequence of the array.
//
// ✅ SOLUTION:
const sumOddLengthSubarrays = function(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);

    let i = 3;
    while (i <= arr.length) {
        for (let j = 0; j < arr.length - i + 1; j++) {
            let subArray = arr.slice(j, j + i);
            sum += subArray.reduce((acc, curr) => acc + curr, 0);
        }
        i += 2;
    }

    return sum;
};

// 📌 TESTCASE:
console.log(sumOddLengthSubarrays([1,4,2,5,3])) // 58
console.log(sumOddLengthSubarrays([1,2])) // 3
console.log(sumOddLengthSubarrays([10,11,12])) // 66