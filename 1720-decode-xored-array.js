// ❓ DESCRIPTION:
// There is a hidden integer array arr that consists of n non-negative integers.
// It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].
// You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].
// Return the original array arr. It can be proved that the answer exists and is unique.

// ✅ SOLUTION:
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function(encoded, first) {
    const arr = [first];
    for (let i = 0; i < encoded.length; i++) {
        arr.push(encoded[i] ^ arr[i]);
    }
    return arr;
};

// 📌 TESTCASE:
console.log(decode([1,2,3], 1)) // [1,0,2,1]
console.log(decode([6,2,7,3], 4)) // [4,2,0,7,4]