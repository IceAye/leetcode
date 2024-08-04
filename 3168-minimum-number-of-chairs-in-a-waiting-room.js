// ❓ DESCRIPTION:
// You are given a string s. Simulate events at each second i:
//
// If s[i] == 'E', a person enters the waiting room and takes one of the chairs in it.
// If s[i] == 'L', a person leaves the waiting room, freeing up a chair.
// Return the minimum number of chairs needed so that a chair is available for every person who enters the waiting room
// given that it is initially empty.
//
// ✅ SOLUTION:

let minimumChairs = function ( s ) {
    let currentCount = 0;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "E") {
            currentCount++;
        } else currentCount--;
        result = Math.max(currentCount , result);
    }
    return result;
};

console.log(minimumChairs("EEEEEEE"))
console.log(minimumChairs("ELELEEL"))
console.log(minimumChairs("ELEELEELLL"))