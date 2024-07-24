// ❓ DESCRIPTION:
// Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.
//
// A substring is a contiguous sequence of characters within a string.
//
// ✅ SOLUTION:
let numOfStrings = function ( patterns , word ) {
    let sum = 0;
    for (const pattern of patterns) {
        word.includes(pattern) ? sum++ : sum;
    }
    return sum;
};

console.log(numOfStrings(["a" , "abc" , "bc" , "d"] , "abc"));
console.log(numOfStrings(["a" , "b" , "c"] , "aaaaabbbbb"));
console.log(numOfStrings(["a" , "a" , "a"] , "ab"));