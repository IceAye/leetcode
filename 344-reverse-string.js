// ❓ DESCRIPTION:
// Write a function that reverses a string. The input string is given as an array of characters s.
//
// You must do this by modifying the input array in-place with O(1) extra memory.
//
// ✅ SOLUTION:
let reverseString = function ( s ) {
    for (let i = 0 , j = s.length - 1; i < j; i++, j--) {
        [s[i] , s[j]] = [s[j] , s[i]];
    }
    return s;
};

console.log(reverseString(["h" , "e" , "l" , "l" , "o"]));
console.log(reverseString(["H" , "a" , "n" , "n" , "a" , "h"]));