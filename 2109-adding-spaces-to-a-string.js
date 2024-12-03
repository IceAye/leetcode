const addSpaces = function(s, spaces) {
    let string = '';
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (i === spaces[count]) {
            string += ' ' + s[i];
            count++;
        } else string += s[i]
    }
    return string;
};

console.log(addSpaces("LeetcodeHelpsMeLearn", [8,13,15])) // "Leetcode Helps Me Learn"
console.log(addSpaces("icodeinpython", [1,5,7,9])) // "i code in py thon"
console.log(addSpaces("spacing", [0,1,2,3,4,5,6])) //  " s p a c i n g"