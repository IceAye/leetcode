// ❓ DESCRIPTION:
// There is a circle of red and blue tiles. You are given an array of integers colors. The color of tile i is represented by colors[i]:
// colors[i] == 0 means that tile i is red.
// colors[i] == 1 means that tile i is blue.
// Every 3 contiguous tiles in the circle with alternating colors (the middle tile has a different color from its left and right tiles) is called an alternating group.
// Return the number of alternating groups.
// Note that since colors represents a circle, the first and the last tiles are considered to be next to each other.
//
// ✅ SOLUTION:
const numberOfAlternatingGroups = function(colors) {
    let length = colors.length;
    let count = 0;

    for (let i = 0; i < length; i++) {
        if (colors[(i - 1 + length) % length] === colors[(i + 1) % length] && colors[i] !== colors[(i + 1) % length]) count++;
    }
    return count;
};

// 📌 TESTCASE:
console.log(numberOfAlternatingGroups([1,1,1])) // 0
console.log(numberOfAlternatingGroups([0,1,0,0,1])) // 3
