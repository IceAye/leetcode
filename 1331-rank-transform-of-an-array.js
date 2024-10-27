// ❓ DESCRIPTION:
// Given an array of integers arr, replace each element with its rank.
// The rank represents how large the element is. The rank has the following rules:
// Rank is an integer starting from 1.
// The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
// Rank should be as small as possible.
//
// ✅ SOLUTION:
let arrayRankTransform = function(arr) {
    let sortedArr = [...new Set(arr)].toSorted((a, b) => a - b);
    let hashMap = sortedArr.reduce((acc, curr, index) => {
        acc[curr] = index + 1;
        return acc;
    }, {})
    return arr.map(item => hashMap[item])
};

// 📌 TESTCASE:
console.log(arrayRankTransform([40,10,20,30])) // [4,1,2,3]
console.log(arrayRankTransform([100,100,100])) // [1,1,1]
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12])) // [5,3,4,2,8,6,7,1,3]