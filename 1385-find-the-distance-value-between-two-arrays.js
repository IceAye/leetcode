// ❓ DESCRIPTION:
// Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.
// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.
//
// ✅ SOLUTION 1:
let findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0;
    for (const num1 of arr1) {
        if (arr2.every(num2 => Math.abs(num1 - num2) > d)) count++;
    }
    return count;
};

// ✅ SOLUTION 2:
let findTheDistanceValue = function(arr1, arr2, d) {
    return arr1.filter(num1 => arr2.every(num2 => Math.abs(num1 - num2) > d)).length;
};

// 📌 TESTCASE:
console.log(findTheDistanceValue([4,5,8], [10,9,1,8], 2)) // 2
console.log(findTheDistanceValue([1,4,2,3], [-4,-3,6,10,20,30], 3)) // 2
console.log(findTheDistanceValue([2,1,100,3], [-5,-2,10,-3,7], 6)) // 1