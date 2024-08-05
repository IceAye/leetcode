// ❓ DESCRIPTION:
// A distinct string is a string that is present only once in an array.
//
// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer
// than k distinct strings, return an empty string "".  Note that the strings are considered in the order in which they
// appear in the array.
//
// ✅ SOLUTION:
let kthDistinct = function ( arr , k ) {
    let distinctArray = [];
    for (let item in arr) {
        if (arr.indexOf(arr[item]) === arr.lastIndexOf(arr[item]))
            distinctArray.push(arr[item]);
    }
    return distinctArray[k - 1] || "";
};

console.log(kthDistinct(["d" , "b" , "c" , "b" , "c" , "a"] , 2));
console.log(kthDistinct(["aaa" , "aa" , "a"] , 1));
console.log(kthDistinct(["a" , "b" , "a"] , 3));
