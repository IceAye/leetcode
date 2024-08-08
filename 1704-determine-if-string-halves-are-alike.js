// ❓ DESCRIPTION:
// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first
// half and b be the second half.  Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o',
// 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.  Return true if a and b are
// alike. Otherwise, return false.
//
// ✅ SOLUTION:

let halvesAreAlike = function ( s ) {
    let vowels = ["a" , "e" , "i" , "o" , "u" , "A" , "E" , "I" , "O" , "U"];
    let half = s.length / 2;
    let count = 0;

    for (let i = 0; i < half; i++) {
        if (vowels.includes(s[i])) count++;
    }

    for (let i = half; i < s.length; i++) {
        if (vowels.includes(s[i])) count--;
    }
    return count === 0;
};

console.log(halvesAreAlike("biik"));
console.log(halvesAreAlike("bk"));
console.log(halvesAreAlike("textbook"));