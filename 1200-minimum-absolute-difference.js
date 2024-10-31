// ❓ DESCRIPTION:
// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.
// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr.
//
// ✅ SOLUTION:
let minimumAbsDifference = function(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let minArray = [];
    for (let i = 0; i < sortedArr.length - 1; i++) {
        minArray.push(Math.abs(sortedArr[i + 1] - sortedArr[i]));
    }
    let min = Math.min(...minArray);
    return minArray.reduce((acc, currentValue, currentIndex) => {
        if (currentValue === min) acc.push([sortedArr[currentIndex], sortedArr[currentIndex + 1]]);
        return acc
    }, [])
};

// 📌 TESTCASE:
console.log(minimumAbsDifference([4,2,1,3])) // [[1,2],[2,3],[3,4]]
console.log(minimumAbsDifference([1,3,6,10,15])) // [[1,3]]
console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27])) // [[-14,-10],[19,23],[23,27]]