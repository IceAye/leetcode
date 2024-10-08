// ❓ DESCRIPTION:
// You are given a 0-indexed string s typed by a user. Changing a key is defined as using a key different from the last used key.
// For example, s = "ab" has a change of a key while s = "bBBb" does not have any.
//
// Return the number of times the user had to change the key.
//
// Note: Modifiers like shift or caps lock won't be counted in changing the key that is
// if a user typed the letter 'a' and then the letter 'A' then it will not be considered as a changing of key.
//
// ✅ SOLUTION:

let countKeyChanges = function (s) {
    let result = 0;
    let array = s.toLowerCase().split("");
    for (let i = 0; i < array.length; i++) {
        array[i] !== array[i + 1] ? result++ : result;
    }
    return result - 1;
};

console.log(countKeyChanges("aAbBcC"));
console.log(countKeyChanges("AaAaAaaA"));
console.log(countKeyChanges("mDVD"));