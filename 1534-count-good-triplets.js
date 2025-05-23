// ❓ DESCRIPTION:
// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.
//
// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.
//
// Return the number of good triplets.
//
// ✅ SOLUTION:
const countGoodTriplets = function (arr, a, b, c) {
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (
                    Math.abs(arr[i] - arr[j]) <= a &&
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c
                )
                    count++;
            }
        }
    }
    return count;
};

// 📌 TESTCASE:
console.log(countGoodTriplets([3,0,1,1,9,7], 7,2,3)) // 4
console.log(countGoodTriplets([1,1,2,2,3], 0,0,1)) // 0