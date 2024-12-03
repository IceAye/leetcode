// ❓ DESCRIPTION:
// You are given a 0-indexed string s and a 0-indexed integer array spaces that describes the indices in the original string where spaces will be added. Each space should be inserted before the character at the given index.
// For example, given s = "EnjoyYourCoffee" and spaces = [5, 9], we place spaces before 'Y' and 'C', which are at indices 5 and 9 respectively. Thus, we obtain "Enjoy Your Coffee".
// Return the modified string after the spaces have been added.
//
// ✅ SOLUTION:
const addSpaces = function(s, spaces) {
    let string = '';
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (i === spaces[count]) {
            string += ' ' + s[i];
            count++;
        } else string += s[i];
    }
    return string;
};

// 📌 TESTCASE:
console.log(addSpaces("LeetcodeHelpsMeLearn", [8,13,15])) // "Leetcode Helps Me Learn"
console.log(addSpaces("icodeinpython", [1,5,7,9])) // "i code in py thon"
console.log(addSpaces("spacing", [0,1,2,3,4,5,6])) //  " s p a c i n g"