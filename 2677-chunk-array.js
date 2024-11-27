// ❓ DESCRIPTION:
// Given an array arr and a chunk size size, return a chunked array.
// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
// Please solve it without using lodash's _.chunk function.
//
// ✅ SOLUTION:
let chunk = function ( arr , size ) {
    let resultArr = []
    let i = 0
    let j = size
    while (i < arr.length) {
        let tempArr = arr.slice(i, j)
        resultArr.push(tempArr)
        i += size
        j += size
    }
    return resultArr
}

// 📌 TESTCASE:
console.log(chunk([1,2,3,4,5], 1)) // [[1],[2],[3],[4],[5]]
console.log(chunk([1,9,6,3,2], 3)) // [[1,9,6],[3,2]]
console.log(chunk([8,5,3,2,6], 6)) // [[8,5,3,2,6]]