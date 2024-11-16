// ❓ DESCRIPTION:
// You are given an array of integers nums of length n and a positive integer k.
// The power of an array is defined as:
// Its maximum element if all of its elements are consecutive and sorted in ascending order.
// -1 otherwise.
// You need to find the power of all
// subarrays
//  of nums of size k.
// Return an integer array results of size n - k + 1, where results[i] is the power of nums[i..(i + k - 1)].
//
// ✅ SOLUTION:

function resultsArray(nums, k) {
    if (k === 1) return nums;

    const result = [];

    let arrays = [];
    for (let i = 0; i <= nums.length - k; i++) {
        arrays.push(nums.slice(i, k + i));
    }

    for (const array of arrays) {
        let count = 0;
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] + 1 === array[j + 1]) {
                count = array[j + 1];
            } else {
                count = -1;
                break;
            }
        }
        result.push(count);
    }
    return result;
}

// 📌 TESTCASE:
console.log(resultsArray([1,2,3,4,3,2,5], 3)) // [3,4,-1,-1,-1]
console.log(resultsArray([2,2,2,2,2], 4)) // [-1,-1]
console.log(resultsArray([3,2,3,2,3,2], 2)) //  [-1,3,-1,3,-1]
console.log(resultsArray([1], 1)) //  [1]