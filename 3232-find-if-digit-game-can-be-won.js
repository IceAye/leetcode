// ❓ DESCRIPTION:
// You are given an array of positive integers nums.
//
// Alice and Bob are playing a game. In the game, Alice can choose either all single-digit numbers or all double-digit
// numbers from nums, and the rest of the numbers are given to Bob. Alice wins if the sum of her numbers is strictly
// greater than the sum of Bob's numbers.  Return true if Alice can win this game, otherwise, return false.
//
// ✅ SOLUTION:
let canAliceWin = function ( nums ) {
    let single = 0;
    let double = 0;
    for (const num of nums) {
        num < 10 ? single += num : double += num
    }
    return single !== double
};

console.log(canAliceWin([1 , 2 , 3 , 4 , 10]));
console.log(canAliceWin([1 , 2 , 3 , 4 , 5 , 14]));
console.log(canAliceWin([5 , 5 , 5 , 25]));
